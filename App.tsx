import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screen/HomePage';

import store from "./redux/store";

import MainTab from './src/navigator/Navigator';

export default function App() {
  return (
    /*<>
        {}
        <Provider store={store}>
            <SafeAreaView style={styles.topSafeArea}/>
            <SafeAreaView style={styles.mainSafeArea}>
                <MainTab></MainTab>
            </SafeAreaView>
        </Provider>
    </>*/
    <>
        <SafeAreaView style={styles.topSafeArea}/>
        <SafeAreaView style={styles.mainSafeArea}>
            <MainTab></MainTab>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainSafeArea: {
    flex: 1,
    backgroundColor: "transparent"
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: 'transparent'
  }
});
