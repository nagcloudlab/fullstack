import React from 'react';
import WelcomeScreen from './app/WelcomeScreen';
import ViewImageScreen from './app/ViewImageScreen';
import Card from './app/components/Card'
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100
    }}>

      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image="../assets/jacket.jpg"
      />

    </View>
  )
}

