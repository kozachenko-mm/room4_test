import { Types } from "./actionsTypes";

export const errorReduser = (state = null, { type, payload }) => {
  switch (type) {
    case Types.FETCH_ARTIST_ERROR:
    case Types.FETCH_SEARCH_ERROR:
    case Types.FETCH_TRACKS_ERROR:
      return payload;

    default:
      return state;
  }
};
