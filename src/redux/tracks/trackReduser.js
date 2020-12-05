import { Types } from "../actionsTypes";
import { combineReducers } from "redux";

const successReduser = (state = [], { type, payload }) => {
  switch (type) {
    case Types.FETCH_TRACKS_SUCCESS:
      return payload.tracks.track;

    default:
      return state;
  }
};

const errorReduser = (state = null, { type, payload }) => {
  switch (type) {
    case Types.FETCH_TRACKS_ERROR:
      return payload;

    default:
      return state;
  }
};
const loadingReduser = (state = false, { type, payload }) => {
  switch (type) {
    case Types.FETCH_TRACKS_START:
      return true;
    case Types.FETCH_TRACKS_ERROR:
    case Types.FETCH_TRACKS_SUCCESS:
      return false;

    default:
      return state;
  }
};
export const tracksReduser = combineReducers({
  tracks: successReduser,
  error: errorReduser,
  loading: loadingReduser,
});
