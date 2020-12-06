import React from "react";
import Loader from "react-loader-spinner";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchList from "../../components/SearchList/SearchList";
import styles from "./SearchPage.module.css";
import { fetchSearch } from "../../redux/searchList/searchListOperation";
import { connect } from "react-redux";

const SearchPage = ({ searchResult, isLoading, isError, fetchSearch }) => {
  const handleSubmit = (value) => {
    fetchSearch(value);
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading && (
        <Loader
          className={styles.loader}
          type="Oval"
          color="#00BFFF"
          height={200}
          width={200}
        />
      )}
      {isError && <p>{isError}</p>}
      {searchResult.length > 0 && (
        <ul>
          {searchResult.map((track, ind) => (
            <SearchList track={track} key={ind} />
          ))}
        </ul>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  searchResult: state.search,
  isLoading: state.isLoading,
  iaError: state.error,
});

const mapDispatchToProps = {
  fetchSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
