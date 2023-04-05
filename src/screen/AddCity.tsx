import { useEffect } from 'react';
import { FlatList,StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { getCityApi } from '../../redux/fonctionsThunk';
import City from '../model/City';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function AddCity() {

    //@ts-ignore 
    const nList = useSelector(state => state.appReducer.cities);

    const dispatch = useDispatch();

    useEffect(() => {   
        const loadedCity = async () => {
            dispatch(getCityApi("Paris"));
        };
        loadedCity();
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image source={require("../../assets/magnifyingglass.png")} style={styles.imageLoupe}></Image>

                <TextInput style={styles.textInput} placeholder="Search" onChangeText={newText => { dispatch(getCityApi(newText)) }}>
                </TextInput>
            </View>

            <FlatList data={nList} renderItem={({ item }) => 
                <TouchableHighlight onPress={() => { console.log("test") }}>
                    <Text>{item.name}</Text>
                </TouchableHighlight>}
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
