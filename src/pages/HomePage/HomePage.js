import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { goUp } from "../../services/goUp";
import styles from "./HomePage.module.css";
import ControlsButtons from "../../components/ControlsButtons/ControlsButtons";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import TrackCard from "../../components/TrackCard/TrackCard";
import { fetchTracks } from "../../redux/tracks/tracksOperation";

class HomePage extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.string,
    data: PropTypes.array.isRequired,
  };

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
        {data.length > 0 && (
          <>
            <ul className={styles.list}>
              {data.map((item, ind) => (
                <TrackCard key={item.mbid || ind} track={item} />
              ))}
            </ul>
            <ControlsButtons numberPage={numberPage} handleButtons={this.handleButtons} />
          </>
        )}
        <ScrollUpButton />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.tracks,
  isLoading: state.isLoading,
  isError: state.tracks.error,
});

const mapDispatchToProps = {
  fetchTracks: fetchTracks,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
