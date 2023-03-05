import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";
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
                        title: 'Home',
                        tabBarIcon: ({ color }) => <TabBarIcon name="home" color="black" />
                    }} />
                <Tab.Screen name="Favoris" component={HomePage}
                    options={{
                        title: 'Favoris',
                        tabBarIcon: ({ color }) => <TabBarIcon name="heart" color="black" />
                    }} />
                <Tab.Screen name="AddCity" component={AddCity}
                    options={{
                        title: 'Add',
                        tabBarIcon: ({ color }) => <FontAwesome name="plus" size={24} color="black" />,
                    }} />
                <Tab.Screen name="Settings" component={Settings}
                    options={{
                        title: 'Settings',
                        tabBarIcon: ({ color }) => <TabBarIcon name="cog" color="black" />
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