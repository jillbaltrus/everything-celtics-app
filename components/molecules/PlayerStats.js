import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import SeasonSelector from "../atoms/SeasonSelector";
import SearchButton from "../atoms/SearchButton";
import { fetchPlayersStatsByPlayerAndSeason } from "../../api/nbaService.api";

// PLACEHOLDER CONSTANTS:
const searchButtonTitle = "Search";

export default function PlayerStats({ player, sortedSeasons }) {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [stats, setStats] = useState();

  useEffect(() => {
    getStatsBySeason(selectedSeason);
  }, [selectedSeason]);

  const selectHandler = (val) => setSelectedSeason(val);

  const getStatsBySeason = async (season) => {
    try {
      if (selectedSeason && selectedSeason.length > 0) {
        const data = await fetchPlayersStatsByPlayerAndSeason(
          player.id,
          selectedSeason
        );
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
    <View style={globalStyles.marginAbove}>
      <Text style={globalStyles.titleText}>Performance</Text>
      <Text style={[globalStyles.paragraph, globalStyles.leftTextContainer]}>
        Explore {player.firstname} {player.lastname}'s statistics by season
      </Text>
      <View style={globalStyles.center}>
        <SeasonSelector
          selectHandler={selectHandler}
          sortedSeasons={sortedSeasons}
        />
        <SearchButton onPress={searchHandler} title={searchButtonTitle} />
        <Text>Stats for season {selectedSeason}.</Text>
      </View>
    </View>
  );
}
