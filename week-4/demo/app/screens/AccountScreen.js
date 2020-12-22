
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
];



function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Nagabhushanam"
                    subTitle="nagabhushanamn@gmail.com"
                    image={require("../images/nag.jpeg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={(({ item }) => (
                        <ListItem
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            title={item.title} />
                    ))}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}


const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;