import { Types } from "./actionsTypes";

export const loadingReduser = (state = false, { type, payload }) => {
  switch (type) {
    case Types.FETCH_ARTIST_START:
    case Types.FETCH_SEARCH_START:
    case Types.FETCH_TRACKS_START:
      return true;
    case Types.FETCH_ARTISTS_ERROR:
    case Types.FETCH_ARTIST_SUCCESS:
    case Types.FETCH_SEARCH_ERROR:
    case Types.FETCH_SEARCH_SUCCESS:
    case Types.FETCH_TRACKS_ERROR:
    case Types.FETCH_TRACKS_SUCCESS:
      return false;

    default:
      return state;
  }
};
