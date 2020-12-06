import React from "react";
import PropTypes from "prop-types";

const SearchList = ({ track }) => {
  return (
    <li>
      <span>{track.name} - </span>
      <span>{track.artist}</span>
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
