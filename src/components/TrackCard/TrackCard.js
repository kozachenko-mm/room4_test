import React from "react";
import { Link } from "react-router-dom";

const TrackCard = ({ track }) => {
  return (
    <li>
      <p>{track.name}</p>
      <Link to={{ pathname: `/artist/${track.artist.name}` }}>
        {track.artist.name}
      </Link>
      <img src={Object.values(track.image[3])[0]} alt="#" />
      <a href={track.artist.url} target="blank">
        {" "}
        link
      </a>
    </li>
  );
};

export default TrackCard;
