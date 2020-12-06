import { fetchArtistStart, fetchArtistSuccess, fetchArtistError } from "./artistAction";
import { getArtistInfo } from "../../services/api";

export const fetchArtist = (name) => (dispatch) => {
  dispatch(fetchArtistStart());

  getArtistInfo(name)
    .then((res) => {
      dispatch(fetchArtistSuccess(res.data));
    })
    .catch((error) => dispatch(fetchArtistError(error.message)));
};
