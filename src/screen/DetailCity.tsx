import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import CityListItem from '../components/CityListItem';

export default function DetailCity({route}) {

    const weather = route.params.weather;
    return (
        <View style={styles.container}>
            <Text>{weather.temperature}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    textInput: {
        width: "90%"

    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 10,
        margin: 10,
    },
    imageLoupe: {
        padding: 10,
        margin: 5,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});
