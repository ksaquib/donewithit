import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
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
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
      })}
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
      component={AccountNavigator}
    />
  </Tab.Navigator>
);

export default AppNavigator;
