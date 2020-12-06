import { Types } from "../actionsTypes";

export const searchReduser = (state = [], { type, payload }) => {
  switch (type) {
    case Types.FETCH_SEARCH_SUCCESS:
      return payload.results.trackmatches.track;

    default:
      return state;
  }
};
