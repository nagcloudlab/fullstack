import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'

const MyDocumentPicker = () => {
    const pickDocument = async (a) => {
        let result = await DocumentPicker.getDocumentAsync({})
        console.log(result.uri)
        const formData = new FormData();
        formData.file = result.uri;
        // POST HTTP request
        //...
    }
    return (
        <View>
            <Button
                title="select document"
                onPress={e => pickDocument()}
            />
        </View>
    );
};

export default MyDocumentPicker;