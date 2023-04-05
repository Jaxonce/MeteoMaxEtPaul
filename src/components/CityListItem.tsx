//item for meteo in list

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import { useNavigation } from '@react-navigation/native';
import City from '../model/City';
import Weather from '../model/Weather';

type CityListItemProps = {
    item: City;
}

export default function CityListItem(props: CityListItemProps) {
    return (
        <>
            <View style={styles.container}>

                <Text style={styles.text}>{props.item.name}</Text>
            </View>
            <View style={styles.separator} />
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    separator: {
        marginVertical: 4,
        backgroundColor: "rgba(223,223,223,1)",
        height: 1,
        width: '90%',
    },
    teaserImage: {
        width: 50,
        height: 50,
    },
    text: {
        fontWeight: "bold",
        color: "black",
        margin: 10,
        width: '100%',
    },
});

