import { AsyncStorage } from "react-native";
import City from "../model/City";

const storeCities = async (cities: City[]) => {
    try {
        const jsonCities = JSON.stringify(cities)
        await AsyncStorage.setItem('cities', jsonCities);
    } catch (e) {
        console.log("An error occurred", e);
    }
}

const getCities = async () => {
    try {
        const jsonCities = await AsyncStorage.getItem('cities')
        return jsonCities != null ? JSON.parse(jsonCities) : null;
    } catch (e) {
        console.log("An error occurred", e);
    }
}