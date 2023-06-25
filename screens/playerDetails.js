import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./../styles/global";
import PlayerBio from "../components/atoms/PlayerBio";
import PlayerStats from "../components/molecules/PlayerStats";

// constants
const title = 'Player Details Screen for player: ';

// TO BE IMPLEMENTED 
export default function PlayerDetails({ route }) {
  const { player, sortedSeasons } = route.params;


  return (
    <View style={globalStyles.container}>
      <PlayerBio player={player}/>
      {/* <PlayerStats playerId={player.id} sortedSeasons={sortedSeasons}/> */}
    </View>
  );
}
