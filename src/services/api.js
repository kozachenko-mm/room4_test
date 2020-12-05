import axios from "axios";

export const getTopTracks = (n) => {
  return axios.get(
    `http://ws.audioscrobbler.com//2.0/?method=chart.gettoptracks&api_key=b0ef57de6689f3bee614bd769ab91be2&format=json&page=${n}`
  );
};

export const getArtistInfo = (name) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=b0ef57de6689f3bee614bd769ab91be2&format=json `
  );
};

export const getImages = (artist, track) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b0ef57de6689f3bee614bd769ab91be2&artist=${artist}&track=${track}&format=json
 `
  );
};
