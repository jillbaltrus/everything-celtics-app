import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PlayerName({ player, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(player.id)}>
      <Text style={styles.player}>
        {player.firstname} {player.lastname} #
        {player.leagues.standard.jersey || 0}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  player: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
