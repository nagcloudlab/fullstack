import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'
import Screen from './app/components/Screen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'


export default function App() {

  return (
    <WelcomeScreen />
  );
}
