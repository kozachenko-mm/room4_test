import { Types } from "../actionsTypes";

export const fetchArtistStart = () => ({
  type: Types.FETCH_ARTIST_START,
});

export const fetchArtistSuccess = (name) => ({
  type: Types.FETCH_ARTIST_SUCCESS,
  payload: name,
});

export const fetchArtistError = (error) => ({
  type: Types.FETCH_ARTIST_ERROR,
  payload: error,
});

