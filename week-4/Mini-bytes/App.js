import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyDocumentPicker from './components/MyDocumentPicker';
import MyMap from './components/MyMap';
import MyList from './components/MyList';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <MyDocumentPicker /> */}
      {/* <MyMap /> */}
      <MyList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
