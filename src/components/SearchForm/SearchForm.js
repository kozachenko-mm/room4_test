import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from './SearchForm.module.css'

import { ReactComponent as Search } from "../../images/search-black-24dp.svg";

const SearchForm = ({ handleSubmit }) => {
  const [value, setValue] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit(value);
    setValue("");
  };
  return (
    <form className={styles.form} onSubmit={submitForm}>
      <input
      className={styles.input}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="Search track"
      />
      <button className={styles.button} type="submit" onClick={submitForm}>
        <Search />
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
