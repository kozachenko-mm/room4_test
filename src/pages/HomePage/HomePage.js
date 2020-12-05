import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import ControlsButtons from "../../components/ControlsButtons/ControlsButtons";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import TrackCard from "../../components/TrackCard/TrackCard";
import { fetchTracks } from "../../redux/tracks/tracksOperation";
import styles from "./HomePage.module.css";
import { goUp } from "../../services/goUp";

class HomePage extends Component {
  state = {
    numberPage: 1,
  };

  componentDidMount() {
    const { numberPage } = this.state;
    this.props.fetchTracks(numberPage);
  }

  componentDidUpdate(prevProps, prevState) {
    const { numberPage } = this.state;
    if (this.state.numberPage !== prevState.numberPage) {
      this.props.fetchTracks(numberPage);
    }
  }

  handleButtons = ({ target }) => {
    target.name === "next"
      ? this.setState((prev) => ({ numberPage: prev.numberPage + 1 }))
      : this.setState((prev) => ({ numberPage: prev.numberPage - 1 }));
    goUp();
  };

  render() {
    const { data, isLoading, isError } = this.props;
    const { numberPage } = this.state;
    return (
      <>
        <ControlsButtons numberPage={numberPage} handleButtons={this.handleButtons} />
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
        <ul className={styles.list}>
          {data.map((item, ind) => (
            <TrackCard key={item.mbid || ind} track={item} />
          ))}
        </ul>
        <ControlsButtons numberPage={numberPage} handleButtons={this.handleButtons} />
        <ScrollUpButton />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.tracks.tracks,
  isLoading: state.tracks.loading,
  isError: state.tracks.error,
});

const mapDispatchToProps = {
  fetchTracks: fetchTracks,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
