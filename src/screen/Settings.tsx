import { useState } from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
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