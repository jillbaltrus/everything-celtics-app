import React from "react";
import { View } from "react-native";
import { globalStyles } from "./../styles/global";
import PlayerBio from "../components/atoms/PlayerBio";
import PlayerStats from "../components/molecules/PlayerStats";

export default function PlayerDetails({ route }) {
  const { player, sortedSeasons } = route.params;


  return (
    <View style={globalStyles.container}>
      <PlayerBio player={player}/>
      <PlayerStats player={player} sortedSeasons={sortedSeasons}/>
    </View>
  );
}
