import { useEffect } from "react";
import * as Notifications from 'expo-notifications'
import * as Permissions from "expo-permissions";


export default useNotifications = (notificationListener) => {

    useEffect(() => {
        registerForPushNotifications();

        if (notificationListener) Notifications.addListener(notificationListener);
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;
            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token); // unique token , persist this token backend- appln
        } catch (error) {
            console.log("Error getting a push token", error);
        }
    };
};
