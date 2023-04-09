//item for meteo in list

import React,{useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';


type OptionComponentProps = {
    nameOption: String;
}

export default function OptionComponent(props: OptionComponentProps) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);
    if (isDarkTheme) {
        return (
            <View style={styleDark.container}>
                <Text style={styleDark.text}>{props.nameOption}</Text>
                <Switch trackColor={{ false: '#767577' }}
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}></Switch>
    
            </View>
        )
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{props.nameOption}</Text>
                <Switch trackColor={{ false: '#767577' }}
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}></Switch>

            </View>
            <View style={styles.separator} />

        </>

    )
}

const styleDark = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        backgroundColor: 'black',
    },
    separator: {
        marginVertical: 4,
        backgroundColor: "rgba(223,223,223,1)",
        height: 1,
        width: '90%',
    },
    text: {
        fontWeight: "bold",
        color: "white",
        margin: 10,
        width: '100%',
    },
});


const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
    },
    separator: {
        marginVertical: 4,
        backgroundColor: "rgba(223,223,223,1)",
        height: 1,
        width: '90%',
    },
    text: {
        fontWeight: "bold",
        color: "black",
        margin: 10,
        width: '100%',
    },
});

