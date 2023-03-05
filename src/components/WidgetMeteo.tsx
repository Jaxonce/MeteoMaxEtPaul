import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

type WidgetMeteoProps = {
    item: Weather;
}

export default function WidgetMeteo(props: WidgetMeteoProps) {
    const windowWidth = Dimensions.get('window').width;
    return (
        
            <View >
                <ImageBackground imageStyle={{ borderRadius: 10 }} source={(props.item.temperature < 10) ? require("../../assets/nuageux.jpg") : require("../../assets/soleil.jpg")} style={[styles.container, { width: (windowWidth / 2) - 20, height: (windowWidth / 2) - 20 }]} blurRadius={5}>

                    <Text style={styles.text}>{props.item.city.name}</Text>
                    <Text style={styles.textTemp}>{props.item.temperature} °C</Text>
                </ImageBackground>

            </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        shadowColor: "#000",
        borderRadius: 10,
        width: 200,
        height: 200,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        color: "white",
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    textTemp: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
});

