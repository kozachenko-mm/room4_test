import React, { useState, useEffect } from "react";
import { getArtistInfo } from "../../services/api";

const ArtistInfo = ({ match }) => {
  const [artist, setArtist] = useState({});
  useEffect(() => {
    getArtistInfo(match.params.name)
      .then(({ data }) => setArtist(data.artist))
      .catch((error) => console.log(error));
//   console.log(artist.bio.content)

  }, [match.params.name]);
  return (
    <div>
      {(Object.keys(artist).length > 0) && (<p>{artist.bio.content}</p>)}
    </div>
  );
};

export default ArtistInfo;
