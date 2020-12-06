import { Types } from "../actionsTypes";

export const tracksReduser = (state = [], { type, payload }) => {
  switch (type) {
    case Types.FETCH_TRACKS_SUCCESS:
      return payload.tracks.track;

    default:
      return state;
  }
};