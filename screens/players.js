import React, { useState, useEffect } from "react";
import { Alert, FlatList, View, Text } from "react-native";
import PlayerName from "./../components/atoms/PlayerName";
import Search from "./../components/molecules/Search";
import { globalStyles } from "./../styles/global";
import {
  fetchCelticsPlayersBySeason,
  fetchPlayersBySeasonAndSearch,
  fetchSeasons,
  fetchPlayersBySearch,
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

  // TO BE REINTRODUCED - commenting out during development so I don't have to pay per API call :)
  // load seasons
  useEffect(() => {
    const loadSeasons = async () => {
      try {
        // const data = await fetchSeasons();
        // const sortedSeasonObjects = data.map(d => ({ key: d, value: d})).sort((a, b) => b.value - a.value);
        const sortedSeasonObjects = [
          { key: 2022, value: 2022 },
          { key: 2021, value: 2021 },
          { key: 2020, value: 2020 },
        ];
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

  // TO BE REINTRODUCED - commenting out during development so I don't have to pay per API call :)
  // load players, triggered when seasons are set.
  useEffect(() => {
    if (seasons.length > 0) {
      // index 0 always has latest season
      loadPlayers(seasons[0].value);
    }
  }, [seasons]);

  // TO BE REINTRODUCED - commenting out during development so I don't have to pay per API call :)
  const loadPlayers = async (season) => {
    try {
      // const data = await fetchCelticsPlayersBySeason(season);
      // setPlayers(data.sort(player => parseInt(player.leagues.standard.jersey)));
      setPlayers([]);
    } catch (error) {
      console.error(error);
    } finally {
      setPlayersLoaded(true);
    }
  };

  // TO BE REINTRODUCED - commenting out during development so I don't have to pay per API call :)
  const searchPlayers = async (searchTerm, season) => {
    try {
      // const data = await fetchPlayersBySeasonAndSearch(season, searchTerm);
      const data = [];
      setPlayers(
        data.sort((player) => parseInt(player.leagues.standard.jersey))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const playerPressHandler = (id) => {
    navigation.navigate(playerDetailsRouteName, {
      playerId: id,
    });
  };

  const playerSearchHandler = (searchTerm, selectedSeason) => {
    if (!selectedSeason) {
      Alert.alert(noSeasonErrorMsg);
    } else {
      searchPlayers(searchTerm, selectedSeason);
    }
  };

  if (!seasonsLoaded || !playersLoaded) {
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
                <PlayerName player={item} pressHandler={playerPressHandler} />
              )}
            ></FlatList>
          )}
          {(!players || players.length == 0) && (
            <Text style={globalStyles.paragraph}>{noPlayersMsg}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
