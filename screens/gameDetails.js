import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./../styles/global";

// CONSTANTS:
const titleText = "Game Details for game: "

// TO BE DONE... not implemented yet
export default function GameDetails({ route }) {

  const { gameId } = route.parms;
  return (
    <View style={globalStyles.container}>
      <Text>{titleText} {gameId}</Text>
    </View>
  );
}
