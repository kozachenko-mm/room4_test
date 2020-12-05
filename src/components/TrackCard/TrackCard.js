import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TrackCard.module.css";
import { getImages } from "../../services/api";

const TrackCard = ({ track }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getImages(track.artist.name, track.name)
      .then(({ data }) => setImage(data.track))
      .catch((error) => console.log(error));
  }, [track]);

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
      <a className={styles.link} href={track.artist.url} target="blank">
        Read more of {track.artist.name} on Last.fm.
      </a>
    </li>
  );
};

export default TrackCard;
