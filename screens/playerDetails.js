import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./../styles/global";

// constants
const title = 'Player Details Screen for player: ';

// TO BE IMPLEMENTED 
export default function PlayerDetails({ route }) {
  const { playerId } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{title} {playerId}</Text>
    </View>
  );
}
