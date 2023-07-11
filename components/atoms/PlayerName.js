import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/global";

export default function PlayerName({ player, pressHandler, sortedSeasons }) {
  const jerseyNumber = player.leagues?.standard?.jersey;
  return (
    <TouchableOpacity onPress={() => pressHandler(player, sortedSeasons)}>
      <Text style={globalStyles.curvedBorderOutline}>
        {player.firstname} {player.lastname}
        {jerseyNumber && ` #${jerseyNumber}`}
      </Text>
    </TouchableOpacity>
  );
}