const BASE_URL = "http://localhost:4000/api";
const CELTICS_TEAM_ID = 2;

export const fetchSeasons = async () => {
  try {
    const response = await fetch(`${BASE_URL}/seasons`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchCelticsTeam = async () => {
  try {
    const response = await fetch(`${BASE_URL}/teams/${CELTICS_TEAM_ID}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchCelticsGamesBySeason = async (season) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games/${CELTICS_TEAM_ID}/${season}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchCelticsPlayersBySeason = async (season) => {
  try {
    const response = await fetch(
      `${BASE_URL}/players/${CELTICS_TEAM_ID}/${season}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchCelticsStandingsByLeague = async (league) => {
  try {
    const response = await fetch(
      `${BASE_URL}/standings/${CELTICS_TEAM_ID}/${league}/${season}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchGameStatsByGame = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/games/stats/${gameId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchCelticsStatsBySeason = async (season) => {
  try {
    const response = await fetch(
      `${BASE_URL}/teams/stats/${CELTICS_TEAM_ID}/${season}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchPlayersStatsByGameId = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/stats/${gameId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchPlayersStatsByPlayerAndSeason = async (playerId, season) => {
  try {
    const response = await fetch(
      `${BASE_URL}/players/stats/${playerId}/${season}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchPlayersBySearch = async (searchTerm) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/players/${CELTICS_TEAM_ID}/${searchTerm}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const fetchPlayersBySeasonAndSearch = async (season, searchTerm) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/players/${CELTICS_TEAM_ID}/${season}/${searchTerm}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
