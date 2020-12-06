import React from "react";
import PropTypes from "prop-types";
import styles from './SearchList.module.css'

const SearchList = ({ track }) => {
  return (
    <li className={styles.listItem}>
      <span className={styles.name}>{track.name} - </span>
      <span className={styles.artist}>{track.artist}</span>
    </li>
  );
};
SearchList.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchList;
