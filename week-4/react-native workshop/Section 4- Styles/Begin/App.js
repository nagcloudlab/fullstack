import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>



      {/* <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'royalblue',
          boderRadius: 50,
          // borderTopWidth: 20,
          // borderTopLeftRadius: 50
        }}
      ></View> */}



      {/* <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          shadowColor: 'grey',
          shadowOffset: { width: -10, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          // elevation: 20 // for androiod
        }} >
      </View> */}



      {/* <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30
        }}>
        <View
          style={{
            backgroundColor: 'gold',
            width: 50,
            height: 50
          }}>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
          margin: 20
        }}></View> */}



      {/* <Text style={{
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '600',
        color: 'tomato',
        textTransform: 'capitalize',
        textAlign: 'right',
        lineHeight: 30
        // fontFamily: 'Courier'
      }}>i love React Native, </Text> */}



      {/* <MaterialCommunityIcons
        name="email"
        size={60}
        color="dodgerblue"
      /> */}


    </View >
  )
}
