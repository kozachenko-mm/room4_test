import axios from "axios";
import { fetchTracksStart, fetchTracksSuccess, fetchTracksError } from "./tracksAction";

export const fetchTracks = () => (dispatch) => {
  dispatch(fetchTracksStart());

  axios
    .get(
      `http://ws.audioscrobbler.com//2.0/?method=chart.gettoptracks&api_key=b0ef57de6689f3bee614bd769ab91be2&format=json&page=3`
    )
    .then((res) => {
      dispatch(fetchTracksSuccess(res.data));
    })
    .catch((error) => dispatch(fetchTracksError(error)));
};
