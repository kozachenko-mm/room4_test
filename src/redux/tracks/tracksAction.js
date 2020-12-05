import { Types } from "../actionsTypes";

export const fetchTracksStart = () => ({
  type: Types.FETCH_TRACKS_START,
});

export const fetchTracksSuccess = (tracks) => ({
  type: Types.FETCH_TRACKS_SUCCESS,
  payload: tracks,
});

export const fetchTracksError = (error) => ({
  type: Types.FETCH_TRACKS_ERROR,
  payload: error,
});
