import { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, FlatList, ListViewBase } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import CityListItem from '../components/CityListItem';
import OptionComponent from '../components/OptionComponent';

export default function Settings() {

    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <OptionComponent nameOption="Dark Theme"></OptionComponent>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 20,
        width: '90%',
        padding: 10,
        borderRadius: 10,
    },
});