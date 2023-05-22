import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Register from "../screens/Register";
import Resume from "../screens/Resume";

const { Screen, Navigator } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Feather name="list" size={size} color={color} />;
          } else if (route.name === "Register") {
            return <Feather name="dollar-sign" size={size} color={color} />;
          } else if (route.name === "Resume") {
            return <Feather name="pie-chart" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "#ff872c",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: "700",
        },
        tabBarLabelPosition: "beside-icon",
      })}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Register" component={Register} />
      <Screen name="Resume" component={Resume} />
    </Navigator>
  );
};

export default TabRoutes;
