import React, { Component } from "react";
import { connect } from "react-redux";
import TrackCard from "../../components/TrackCard/TrackCard";
import { fetchTracks } from "../../redux/tracks/tracksOperation";
import styles from './HomePage.module.css'

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchTracks('1');
  }

  render() {
    const { data } = this.props;
    // console.log(data);

    return (
        <ul className={styles.list}>
        {data.map((item, ind) => (
          <TrackCard key={item.mbid || ind} track={item} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.tracks.tracks,
});

const mapDispatchToProps = {
  fetchTracks: fetchTracks,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
