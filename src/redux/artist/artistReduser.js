import { Types } from "../actionsTypes";
import { combineReducers } from "redux";

const successReduser = (state = {}, { type, payload }) => {
  switch (type) {
    case Types.FETCH_ARTIST_SUCCESS:
      return payload.artist;
    default:
      return state;
  }
};

const errorReduser = (state = null, { type, payload }) => {
  switch (type) {
    case Types.FETCH_ARTTIST_ERROR:
      return payload;

    default:
      return state;
  }
};
const loadingReduser = (state = false, { type, payload }) => {
  switch (type) {
    case Types.FETCH_ARTIST_START:
      return true;
    case Types.FETCH_ARTIST_ERROR:
    case Types.FETCH_ARTIST_SUCCESS:
      return false;

    default:
      return state;
  }
};
export const artistReduser = combineReducers({
  artist: successReduser,
  error: errorReduser,
  loading: loadingReduser,
});
