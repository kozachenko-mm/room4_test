import { Types } from "../actionsTypes";

export const artistReduser = (state = {}, { type, payload }) => {
  switch (type) {
    case Types.FETCH_ARTIST_SUCCESS:
      return payload.artist;
      
    default:
      return state;
  }
};
