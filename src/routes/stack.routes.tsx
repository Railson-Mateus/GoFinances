import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import GetStart from "../screens/GetStart";
import Home from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="GetStart" component={GetStart} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default StackRoutes;
