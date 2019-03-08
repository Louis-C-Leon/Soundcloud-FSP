import React from 'react';
import SongContainer from './song_container';
import { connect } from 'react-redux';



class SongCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="songCarousel">
      <div className="carouselHeader">{this.props.genre}</div>
      {this.props.playlist.map( (curr_song) => {
        return( <SongContainer song={curr_song} />)
      })}
    </div>

  }
}

export default connect(mSTP, mDTP)(SongCarousel);