import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./TrackCard.module.css";
import { getImages } from "../../services/api";

const TrackCard = ({ track }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getImages(track.artist.name, track.name)
      .then(({ data }) => setImage(data.track))
      .catch((error) => console.log(error));
  }, [track.artist.name, track.name]);

  return (
    <li className={styles.listItem}>
      <Link
        className={styles.artistName}
        to={{ pathname: `/artist/${track.artist.name}` }}
      >
        {track.artist.name}
      </Link>
      <h5 className={styles.trackName}>{track.name}</h5>

      <img
        className={styles.img}
        src={image?.album?.image[3]["#text"] || track.image[3]["#text"]}
        alt="#"
      />
      <a className={styles.link} href={track.artist.url} >
        Read more of {track.artist.name} on Last.fm.
      </a>
    </li>
  );
};

TrackCard.prototype = {
  track: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.object.isRequired,
    image: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default TrackCard;
