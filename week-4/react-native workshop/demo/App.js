import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';


import AuthNavigator from "./app/navigation/AuthNavigator"
import AppNavigator from "./app/navigation/AppNavigator"
import { NavigationContainer } from '@react-navigation/native'

import OfflineNotice from "./app/components/OfflineNotice";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppLoading from 'expo-app-loading';

import useNotifications from "./app/hooks/useNotifications";


export default function App() {

  // useNotifications();

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  )
}
