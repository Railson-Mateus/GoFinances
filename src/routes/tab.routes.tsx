import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Register from "../screens/Register";
import Resume from "../screens/Resume";

const { Screen, Navigator } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Register" component={Register} />
      <Screen name="Resume" component={Resume} />
    </Navigator>
  );
};

export default TabRoutes;
