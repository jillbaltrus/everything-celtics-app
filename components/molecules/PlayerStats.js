import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { globalStyles } from "../../styles/global";
import SeasonSelector from "../atoms/SeasonSelector";
import SearchButton from "../atoms/SearchButton";
import { fetchPlayersStatsByPlayerAndSeason } from "../../api/nbaService.api";

// PLACEHOLDER CONSTANTS:
const searchButtonTitle = "Search";

export default function PlayerStats({ playerId, sortedSeasons }) {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [stats, setStats] = useState();

  // TO BE REINTRODUCED - commenting out during development so I don't have to pay per API call :)
  // load players, triggered when seasons are set.
  useEffect(() => {
    getStatsBySeason(selectedSeason);
  }, [selectedSeason]);

  const selectHandler = (val) => setSelectedSeason(val);

  const getStatsBySeason = async (season) => {
    try {
      if (season && season.length > 0) {
        const data = await fetchPlayersStatsByPlayerAndSeason(playerId, season);
        setStats(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const searchHandler = (selectedSeason) => {
    if (!selectedSeason) {
      Alert.alert(noSeasonErrorMsg);
    } else {
      getStatsBySeason(selectedSeason);
    }
  };

  return (
    <View style={globalStyles.center}>
      <SeasonSelector
        selectHandler={selectHandler}
        sortedSeasons={sortedSeasons}
      />
      <SearchButton onPress={searchHandler} title={searchButtonTitle} />
      <Text>Stats will go here.</Text>
    </View>
  );
}
