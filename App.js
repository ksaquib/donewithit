import React from "react";
import { Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingsScreen from "./app/screens/ListingsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Home = createStackNavigator();
const HomeNavigator = () => (
  <Home.Navigator headerMode="none">
    <Home.Screen name="ListingScreen" component={ListingsScreen} />
    <Home.Screen name="ListingDetailsScreen" component={ListingDetailsScreen} />
  </Home.Navigator>
);
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "white",
      activeTintColor: "tomato",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "#eee",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Edit"
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="face-profile"
            size={size}
            color={color}
          />
        ),
      }}
      component={AccountScreen}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
