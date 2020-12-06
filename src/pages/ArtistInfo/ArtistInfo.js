import { fetchArtist } from "../../redux/artist/artistOperation";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styles from "./ArtistInfo.module.css";

import React, { Component } from "react";
import { goUp } from "../../services/goUp";

class ArtistInfo extends Component {

  componentDidMount() {
    goUp()
    const name = this.props.match.params.name;
    this.props.fetchArtist(name);
  }

  createMarkup = (text) => {
    return { __html: text };
  };

  render() {
    const { artist, isError, isLoading } = this.props;

    return (
      <div>
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
        {Object.keys(artist).length > 0 && (
          <>
            <div className={styles.head} >
              <img className={styles.img} src={artist.image[4]["#text"]} alt="#" />
              <h2 className={styles.name} >{artist.name}</h2>

            </div>

            <p className={styles.text} dangerouslySetInnerHTML={this.createMarkup(artist.bio.content)} />
            <p className={styles.tags} >
              tags:{" "}
              {artist.tags.tag.map((tag, ind) => (
                <span key={ind}>{tag.name}, </span>
              ))}{" "}
            </p>
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  artist: state.artist.artist,
  isLoading: state.artist.loading,
  isError: state.artist.error,
});

const mapDispatchToProps = {
  fetchArtist,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
