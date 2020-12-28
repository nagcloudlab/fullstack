import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

import listingsApi from "../api/listings";
import AppText from "../components/Text";
import { Button } from "react-native-elements";


import ActivityIndicator from "../components/ActivityIndicator";

import useApi from "../hooks/useApi";


function ListingsScreen({ navigation }) {

  const { data: listings, error, loading, request } = useApi(listingsApi.getListings);

  useEffect(() => {
    request()
  }, [])


  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={request} />
        </>
      )}

      <ActivityIndicator visible={loading} />


      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        )}
      />

    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
