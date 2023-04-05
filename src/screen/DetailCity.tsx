import { useState } from 'react';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';


export default function DetailCity({ route, navigation }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const addFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    const weather = route.params.weather;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row" }}>
                    <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: "row"}}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                        <Text style={{ fontSize: 20 }}>Home</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Pressable onPress={()=> addFavorite()}>
                        <Ionicons name={isFavorite ? "ios-heart-sharp" : "ios-heart-outline"} size={24}/>
                    </Pressable>     
                </View>
            </View>

            <View style={styles.temperature}>
                <Text style={styles.weatherText}>{weather.city.name}</Text>
                <Text style={styles.temperatureText}>{weather.temperature} °</Text>
            </View>
            <View style={styles.nexttemp}>
                <View style={{flexDirection:"row"}}>
                    <AntDesign name="clockcircleo" size={15} />
                    <Text style={{ fontSize: 15 }}>HOURLY FORECAST</Text>
                </View>

            </View>
            <View style={styles.nextdays}>
                <View style={{flexDirection:"row"}}>
                    <AntDesign name="calendar" size={15} />
                    <Text style={{ fontSize: 15 }}>10-DAY FORECAST</Text>
                </View>
            </View>

        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    temperature: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    },
    nexttemp: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 130,
        borderRadius: 10,
        margin: 10,
        width: '90%',
        backgroundColor: 'rgba(223,223,223,1)',
        paddingLeft: "3%",
        paddingTop: "3%",
    },
    nextdays: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: "50%",
        borderRadius: 10,
        margin: 10,
        width: '90%',
        backgroundColor: 'rgba(223,223,223,1)',
        marginBottom: 100,
        paddingLeft: "3%",
        paddingTop: "3%",
    },
    weatherText: {
        fontSize: 40,
    },
    temperatureText: {
        fontSize: 80,
    },
    scrollView: {
        width: '100%',
        padding: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        margin: 10,
    },
});
