import axios from "axios";
import { RAPIDAPI_KEY } from "@env";

const CELTICS_TEAM_ID = 2;
const BASE_URL = `https://api-nba-v1.p.rapidapi.com`;
const HOST_HEADER = `api-nba-v1.p.rapidapi.com`;

export const fetchSeasons = async () => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/seasons`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
  });
  return response.data.response;
};

export const fetchCelticsTeam = async () => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/teams`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      id: CELTICS_TEAM_ID,
    },
  });
  return response.data.response;
};

export const fetchCelticsGamesBySeason = async (season) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/games`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      team: CELTICS_TEAM_ID,
      season: season,
    },
  });
  return response.data.response;
};

export const fetchCelticsPlayersBySeason = async (season) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/players`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      team: CELTICS_TEAM_ID,
      season: season,
    },
  });
  return response.data.response;
};

export const fetchCelticsStandingsByLeague = async (league) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/standings`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      team: CELTICS_TEAM_ID,
      season: season,
      league: league,
    },
  });
  return response.data.response;
};

export const fetchGameStatsByGame = async (gameId) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/games/statistics`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      id: gameId,
    },
  });
  return response.data.response;
};

export const fetchCelticsStatsBySeason = async (season) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/teams/statistics`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      id: teamId,
      season: season,
    },
  });
  return response.data.response;
};

export const fetchPlayersStatsByPlayerAndSeason = async (playerId, season) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/players/statistics`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      id: playerId,
      season: season,
    },
  });
  return response.data.response;
};

export const fetchPlayersBySearch = async (searchTerm) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/players`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      search: searchTerm,
      team: CELTICS_TEAM_ID,
    },
  });
  return response.data.response;
};

export const fetchPlayersBySeasonAndSearch = async (season, searchTerm) => {
  const response = await axios({
    method: "GET",
    url: BASE_URL + `/players`,
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST_HEADER,
    },
    params: {
      search: searchTerm,
      team: CELTICS_TEAM_ID,
      season: season,
    },
  });
  return response.data.response;
};
