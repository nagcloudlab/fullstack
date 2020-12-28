import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';


import AppNavigator from "./app/navigation/AppNavigator"
import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}
