import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("./assets/background.jpg")}
        >

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen;