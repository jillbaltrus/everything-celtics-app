import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PlayerDetails from "../screens/playerDetails";
import Players from "./../screens/players";

const Stack = createStackNavigator();

export default function PlayersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Players"
        component={Players}
        options={{ title: "Players" }}
      ></Stack.Screen>
      <Stack.Screen
        name="PlayerDetails"
        component={PlayerDetails}
        options={{ title: "Player Details" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
