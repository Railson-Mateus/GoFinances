import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import GetStart from "../screens/GetStart";
import Home from "../screens/Home";

const { Screen, Navigator } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName="GetStart"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="GetStart" component={GetStart} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default TabRoutes;
