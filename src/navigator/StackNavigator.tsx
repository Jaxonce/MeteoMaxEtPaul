import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import * as React from "react";
import HomePage from "../screen/HomePage";
import DetailCity from "../screen/DetailCity";
const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        
            <Stack.Navigator
                initialRouteName="HomePage"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="DetailCity" component={DetailCity} />
            </Stack.Navigator>
        
    )
}