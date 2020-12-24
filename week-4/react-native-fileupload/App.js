import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Clipboard, Share, ActivityIndicator, TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions';

export default function App() {

  const [image, setImage] = useState(null)
  const [uploading, setUploading] = useState(false)



  const _maybeRenderUploadingOverlay = () => {
    if (uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  const _maybeRenderImage = () => {

    if (!image) {
      return;
    }

    return (
      <View
        style={styles.maybeRenderContainer}>
        <View
          style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View>
      </View>
    );
  };

  const _pickImage = async () => {

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      _handleImagePicked(pickerResult);
    }
  }

  const _takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      _handleImagePicked(pickerResult);
    }

  }


  const _handleImagePicked = async pickerResult => {

    let uploadResponse, uploadResult;

    try {

      setUploading(true);

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();

        // setImage({
        //   image: uploadResult.location
        // });

      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
    } finally {
      setUploading(false);
    }
  }


  const uploadImageAsync = async (uri) => {
    let apiUrl = 'http://172.20.10.3:8080/upload';
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    // FORM 
    let formData = new FormData(); // 
    formData.append('photo', {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });

    let options = {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };

    return fetch(apiUrl, options); //
  }





  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text
        style={styles.exampleText}>
        Example: Upload ImagePicker result
        </Text>
      <Button
        onPress={_pickImage}
        title="Pick an image from camera roll"
      />
      <Button onPress={_takePhoto} title="Take a photo" />
      {_maybeRenderImage()}
      {_maybeRenderUploadingOverlay()}
    </View>
  )



}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  maybeRenderImage: {
    height: 250,
    width: 250,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});
