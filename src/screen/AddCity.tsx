import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import CityListItem from '../components/CityListItem';

export default function AddCity() {


    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image source={require("../../assets/magnifyingglass.png")} style={styles.imageLoupe}></Image>

                <TextInput style={styles.textInput} placeholder="Search">
                </TextInput>
            </View>

            <FlatList data={CITIES_DATA} renderItem={CityListItem}
                keyExtractor={(item: City) => item.name} />
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
