import React from 'react';
import SongContainer from './song_container';
import { connect } from 'react-redux';
import { shufflePlaylist } from '../../util/song_util'

const mSTP = (state) => {
  return({});
}

const mDTP = (dispatch) => {
  return({});
}

class SongCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      backClass: "carouselHide",
      forwardClass: "carouselHide",
      offset: 0,   
      genreNames: {
        "hip-hop": "Hip-Hop",
        "indie/alternative": "Indie and Alternative",
        "pop": "Pop and R&B",
        "other": "Other",
        "jazz": "Jazz",
        "electronic": "Electronic"
      }   
    }
    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this); 
  }

  static getDerivedStateFromProps(props, state) {
    if(props.playlist.length > 4 && state.currIndex === 0) {
      return {forwardClass: "carouselShow"}
    } else {
      return null;
    }
  }

  goForward() {
    this.setState({offset: this.state.offset - 780, 
      backClass: "carouselShow",
      currIndex: this.state.currIndex + 4,
    }, () => {
      if (this.state.currIndex > (this.props.playlist.length - 4)) {
        this.setState({forwardClass: "carouselHide"})
      }
    })
  }

  goBack() {
    this.setState({offset: this.state.offset + 780, 
      forwardClass: "carouselShow",
      currIndex: this.state.currIndex - 4,
    }, () => {
      if (this.state.currIndex < 1) {
        this.setState({backClass: "carouselHide"})
      }
    });
  }


  render() {
    const songPlaylist = this.props.playlist.map(song => song.id)
    return (
      <div className="carouselContainer">
        <div className="carouselHeader">{this.state.genreNames[this.props.genre]}</div>
        <div className="songCarousel">
        <div className={`carouselButton leftButton ${this.state.backClass}`} onClick={this.goBack}>{"<"}</div>
        <div className={`carouselButton rightButton ${this.state.forwardClass}`} onClick={this.goForward}>{">"}</div>
        {this.props.playlist.map( (curr_song) => {
          return( 
            <div key={`song#${curr_song.id}`} className="songContainer" style={{left: `${this.state.offset}px`}}>
              <SongContainer song={curr_song} playlist={songPlaylist}/>
            </div>)})}
        </div>
      </div>
    );
  }
}

export default connect(mSTP, mDTP)(SongCarousel);