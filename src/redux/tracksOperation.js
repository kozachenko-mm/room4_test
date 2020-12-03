import { fetchTracksStart, fetchTracksSuccess, fetchTracksError } from "./tracksAction";
import { getTopTracks } from "../services/api";

export const fetchTracks = () => (dispatch) => {
  dispatch(fetchTracksStart());

  getTopTracks()
    .then((res) => {
      dispatch(fetchTracksSuccess(res.data));
    })
    .catch((error) => dispatch(fetchTracksError(error)));
};
