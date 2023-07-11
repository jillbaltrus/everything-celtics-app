import React, { useState, useEffect } from "react";
import { Alert, FlatList, View, Text } from "react-native";
import PlayerName from "./../components/atoms/PlayerName";
import Search from "./../components/molecules/Search";
import { globalStyles } from "./../styles/global";
import {
  fetchCelticsPlayersBySeason,
  fetchPlayersBySeasonAndSearch,
  fetchSeasons,
} from "../api/nbaService.api";

// constants
const titleText = "Look up Celtics players by season and last name";
const noSeasonErrorMsg = "You must select a season.";
const playerDetailsRouteName = "PlayerDetails";
const noPlayersMsg = "No players found.";

export default function Players({ navigation }) {
  const [seasonsLoaded, setSeasonsLoaded] = useState(false);
  const [playersLoaded, setPlayersLoaded] = useState(false);
  const [players, setPlayers] = useState([]);
  const [seasons, setSeasons] = useState([]);

  // load seasons
  useEffect(() => {
    const loadSeasons = async () => {
      try {
        const data = await fetchSeasons();
        const sortedSeasonObjects = data.map(d => ({ key: d, value: d})).sort((a, b) => b.value - a.value);
        setSeasons(sortedSeasonObjects);
      } catch (error) {
        console.error(error);
        // todo: alert
      } finally {
        setSeasonsLoaded(true);
      }
    };
    loadSeasons();
  }, []);

  // load players, triggered when seasons are set (when page is first loaded)
  useEffect(() => {
    if (seasons.length > 0) {
      // index 0 always has latest season
      loadPlayers(seasons[0].value);
    }
  }, [seasons]);

  const loadPlayers = async (season) => {
    try {
      const data = await fetchCelticsPlayersBySeason(season);
      setPlayers(sortAndFilterPlayers(data));
    } catch (error) {
      console.error(error);
    } finally {
      setPlayersLoaded(true);
    }
  };

  const searchPlayers = async (searchTerm, season) => {
    try {
      setPlayersLoaded(false);
      let data;
      if (searchTerm.trim().length > 0) {
        data = await fetchPlayersBySeasonAndSearch(season, searchTerm);
      } else {
        data = await fetchCelticsPlayersBySeason(season);
      }
      setPlayers(sortAndFilterPlayers(data));
      setPlayersLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const sortAndFilterPlayers = (playerData) => {
    // only include players from standard league
    const filteredPlayerData = playerData.filter(p => Object.keys(p.leagues).includes('standard'));
    // sort by last name
    const sortedFilteredPlayerData = filteredPlayerData.sort((p1, p2) =>
    p1.lastname.localeCompare(p2.lastname));
    return sortedFilteredPlayerData;
  }

  const playerPressHandler = (player, sortedSeasons) => {
    navigation.navigate(playerDetailsRouteName, {
      player: player,
      sortedSeasons: sortedSeasons,
    });
  };

  const playerSearchHandler = (searchTerm, selectedSeason) => {
    if (!selectedSeason) {
      Alert.alert(noSeasonErrorMsg);
    } else {
      searchPlayers(searchTerm, selectedSeason);
    }
  };

  if (!seasonsLoaded) {
    return; // todo: loading icon
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.paragraph}>{titleText}</Text>
        <Search searchHandler={playerSearchHandler} seasons={seasons} />
        <View style={globalStyles.list}>
          {players.length > 0 && (
            <FlatList
              keyExtractor={(item) => item.id}
              data={players}
              renderItem={({ item }) => (
                <PlayerName player={item} pressHandler={playerPressHandler} sortedSeasons={seasons} />
              )}
            ></FlatList>
          )}
          {(!players || players.length == 0) && playersLoaded && (
            <Text style={globalStyles.paragraph}>{noPlayersMsg}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
