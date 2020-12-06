import React, { useState } from "react";
import Loader from "react-loader-spinner";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchList from "../../components/SearchList/SearchList";
import { getSearch } from "../../services/api";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const handleSubmit = (value) => {
    setIsLoading(true);
    getSearch(value)
      .then(({ data }) => setSearchResult(data.results.trackmatches.track))
      .catch((error) => setIsError(error.message))
      .finally(setIsLoading(false));
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

export default SearchPage;
