import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStart from "../screens/GetStart";
import TabRoutes from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="GetStart"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="GetStart" component={GetStart} />
      <Screen name="Home" component={TabRoutes} />
    </Navigator>
  );
};

export default StackRoutes;
