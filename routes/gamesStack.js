import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GameDetails from "../screens/gameDetails";
import Games from "../screens/games";

const Stack = createStackNavigator();

export default function GamesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Players"
        component={Games}
        options={{ title: "Games" }}
      ></Stack.Screen>
      <Stack.Screen
        name="Player Details"
        component={GameDetails}
        options={{ title: "Game Details" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
