import React from "react";
import { Text, View, FlatList } from "react-native";
import { globalStyles } from "../../styles/global";
import BioDetail from "./BioDetails";

export default function PlayerBio({ player }) {
  const { firstname: firstName, lastname: lastName, college } = player;
  const { date: birthday, country: bornInCountry } = player.birth;
  const { start: nbaStartYear } = player.nba;
  const { feets: heightFt, inches: heightIn } = player.height;
  const { pounds: weightLb } = player.weight;
  const { jersey, active, pos } = player.leagues?.standard;

  const bioDetails = [
    {
      title: "Height",
      body: `${heightFt}'${heightIn}"`,
    },
    {
      title: "Weight",
      body: `${weightLb} lbs`,
    },
    {
      title: "Position",
      body: `${pos}`,
    },
    {
      title: "Born",
      body: `${birthday}, ${bornInCountry}`,
    },
    {
      title: "College",
      body: `${college}`,
    },
    {
      title: "First NBA season",
      body: `${nbaStartYear}`,
    },
    {
      title: "NBA Status",
      body: `${active ? "Active" : "Inactive"}`,
    },
  ];

  return (
    <View>
      <Text style={globalStyles.titleText}>
        {firstName} {lastName} - #{jersey || 0}
      </Text>
      <View style={globalStyles.bottomBorder}>
        <FlatList
          keyExtractor={(item) => item.title}
          data={bioDetails}
          renderItem={({ item }) => <BioDetail detail={item} />}
        ></FlatList>
      </View>
    </View>
  );
}
