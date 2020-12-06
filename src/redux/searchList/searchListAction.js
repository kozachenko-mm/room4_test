import { Types } from "../actionsTypes";

export const fetchSearchStart = () => ({
  type: Types.FETCH_SEARCH_START,
});

export const fetchSearchSuccess = (tracks) => ({
  type: Types.FETCH_SEARCH_SUCCESS,
  payload: tracks,
});

export const fetchSearchError = (error) => ({
  type: Types.FETCH_SEARCH_ERROR,
  payload: error,
});