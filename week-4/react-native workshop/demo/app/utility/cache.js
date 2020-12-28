import { AsyncStorage } from "react-native";
import moment from "moment";

const prefix = "cache";

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now(),
        };
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item)); // serialize
    } catch (error) {
        console.log(error);
    }
};

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, "minutes") > 5;
};

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key); // de serialize
        const item = JSON.parse(value);

        if (!item) return null;

        if (isExpired(item)) {
            // Command Query Separation (CQS)
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return item.value;
    } catch (error) {
        console.log(error);
    }
};


export default {
    store,
    get,
};