import { fetchArtist } from "../../redux/artist/artistOperation";
import { connect } from "react-redux";

import React, { Component } from "react";

class ArtistInfo extends Component {
  componentDidMount() {
    const name = this.props.match.params.name;
    this.props.fetchArtist(name);
  }

  createMarkup = (text) => {
    return { __html: text };
  };

  render() {
    const { artist } = this.props;
    console.log(this.props.match.params.name);
    console.log(artist);

    return (
      <div>
        {Object.keys(artist).length > 0 && (
          <p dangerouslySetInnerHTML={this.createMarkup(artist.bio.content)} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  artist: state.artist.artist,
});

const mapDispatchToProps = {
  fetchArtist,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
