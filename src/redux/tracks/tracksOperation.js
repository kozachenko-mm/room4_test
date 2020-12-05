import { fetchTracksStart, fetchTracksSuccess, fetchTracksError } from "./tracksAction";
import { getTopTracks } from "../../services/api";

export const fetchTracks = (n) => (dispatch) => {
  dispatch(fetchTracksStart());

  getTopTracks(n)
    .then((res) => {
      dispatch(fetchTracksSuccess(res.data));
    })
    .catch((error) => dispatch(fetchTracksError(error)));
};
