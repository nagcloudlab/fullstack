

import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../images/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../images/logo-red.png")} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="login" onPress={() => console.log("go to login scrren")} />
                <AppButton title="Register" color="secondary" onPress={() => console.log("go to register screen")} />
            </View>

        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        width: "100%",
        padding: 20
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;
