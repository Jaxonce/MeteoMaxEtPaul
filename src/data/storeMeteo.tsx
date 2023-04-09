import { AsyncStorage } from "react-native";
import Weather from "../model/Weather";

const storeWeather = async (weather: Weather[]) => {
    try {
        const jsonWeather = JSON.stringify(weather)
        await AsyncStorage.setItem('weather', jsonWeather);
    } catch (e) {
        console.log("An error occurred", e);
    }
}

const getWeather = async () => {
    try {
        const jsonWeather = await AsyncStorage.getItem('weather')
        return jsonWeather != null ? JSON.parse(jsonWeather) : null;
    } catch (e) {
        console.log("An error occurred", e);
    }
}