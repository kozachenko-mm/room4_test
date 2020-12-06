import {
  fetchSearchStart,
  fetchSearchSuccess,
  fetchSearchError,
} from "./searchListAction";
import { getSearch } from "../../services/api";

export const fetchSearch = (value) => (dispatch) => {
  dispatch(fetchSearchStart());

  getSearch(value)
    // .then((res) => console.log(res.data.results.trackmatches.track))
    .then((res) => dispatch(fetchSearchSuccess(res.data)))
    .catch((error) => dispatch(fetchSearchError(error.message)));
};
