import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HomePage from "../screen/HomePage";
import AddCity from "../screen/AddCity";
import Settings from "../screen/Settings";
import StackNavigator from "./StackNavigator";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={StackNavigator}
                    options={{
                        unmountOnBlur: true,
                        title: 'Home',
                        tabBarIcon: ({ color }) => <Ionicons name="home-outline" color={color} size={24} />
                    }} />
                <Tab.Screen name="Favoris" component={HomePage}
                    options={{
                        unmountOnBlur: true,
                        title: 'Favoris',
                        tabBarIcon: ({ color }) => <Ionicons name="ios-heart-outline" color={color} size={24} />
                    }} />
                <Tab.Screen name="AddCity" component={AddCity}
                    options={{
                        unmountOnBlur: true,
                        title: 'Add',
                        tabBarIcon: ({ color }) => <Ionicons name="ios-add" size={24} color={color} />,
                    }} />
                <Tab.Screen name="Settings" component={Settings}
                    options={{
                        unmountOnBlur: true,
                        title: 'Settings',
                        tabBarIcon: ({ color }) => <Ionicons name="ios-cog" color={color} size={24}/>
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} {...props} />;
}