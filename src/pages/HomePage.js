import React, { Component } from "react";
import { connect } from "react-redux";
import TrackCard from "../components/TrackCard/TrackCard";
import { fetchTracks } from "../redux/tracksOperation";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { data } = this.props;
    // console.log(data);

    return (
        <ul>
        {data.map((item, ind) => (
          <TrackCard key={item.mbid || ind} track={item} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.tracks,
});

const mapDispatchToProps = {
  fetchTracks: fetchTracks,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
