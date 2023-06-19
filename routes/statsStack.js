import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Stats from "../screens/stats";

const Stack = createStackNavigator();

export default function StatsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stats"
        component={Stats}
        options={{ title: "Stats" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
