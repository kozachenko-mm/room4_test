import axios from "axios";
const key = "b0ef57de6689f3bee614bd769ab91be2";

export const getTopTracks = (number) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json&page=${number}`
  );
};

export const getArtistInfo = (name) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${key}&format=json `
  );
};

export const getImages = (artist, track) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${key}&artist=${artist}&track=${track}&format=json
 `
  );
};
export const getSearch = (track) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${key}&format=json
 `
  );
};
