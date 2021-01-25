import React from 'react';
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const MyMap = () => {
    return (
        <MapView
            style={StyleSheet.absoluteFillObject}
            provider={MapView.GOOGLE_PROVIDER}
            initialRegion={{
                latitude: 13.408700,
                longitude: 80.124786,
                latitudeDelta: .005,
                longitudeDelta: .005
            }}>

            <Marker
                coordinate={{ latitude: 13.408700, longitude: 80.124786 }}
                title='My Location'
                description='your trainier is here!'
            />

        </MapView>
    );
};

export default MyMap;
