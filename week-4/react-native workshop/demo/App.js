import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';


import AppNavigator from "./app/navigation/AppNavigator"
import { NavigationContainer } from '@react-navigation/native'

import OfflineNotice from "./app/components/OfflineNotice";


export default function App() {

  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}
