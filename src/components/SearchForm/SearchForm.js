import React, { useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Search } from "../../images/search-black-24dp.svg";

const SearchForm = ({ handleSubmit }) => {
  const [value, setValue] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit(value);
    setValue("");
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholdeer="Search track"
      />
      <button type="submit" onClick={submitForm}>
        <Search />
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
