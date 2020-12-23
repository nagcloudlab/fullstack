import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';

import Screen from './app/components/Screen'
import AsyncStorage from '@react-native-community/async-storage'


import AppNavigator from "./app/navigation/AppNavigator"
import AuthNavigator from "./app/navigation/AuthNavigator"

import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  const [token, setToken] = useState(null)
  const loadToken = async () => {
    await AsyncStorage.setItem('auth-token', 'd7564fs85f4795x8z76v5x7zcv') // for testing
    const token = await AsyncStorage.getItem('auth-token')
    if (token)
      setToken(token)
  }
  useEffect(() => {
    loadToken()
  }, [])
  const renderScreen = () => {
    if (token)
      return <AppNavigator />
    else
      return <AuthNavigator />
  }
  return (
    <>
      <NavigationContainer>
        {renderScreen()}
      </NavigationContainer>
    </>
  )
}
