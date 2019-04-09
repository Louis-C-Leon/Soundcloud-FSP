import React from 'react';
import SongContainer from "./song_container";
import SongCarousel from "./song_carousel";

class SongDiscover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("mounting");
    this.props.getAllSongs().then(
      () => Object.values(this.props.songs).forEach( 
        (song) => {
          if(this.state[song.genre]=== undefined) {
            this.setState({[song.genre]: [song]})
          } else {
            this.setState({[song.genre]: this.state[song.genre].concat([song])})
          }
        }
        )
    );
  }

  render() {
    let result;
    if(Object.keys(this.props.songs) === 0) {
      result = [];
    } else {
      result = Object.values(this.props.songs)
    }
    return(
      <>
        <div className="discoverHeader">Discover Curated Genre Playlists</div>
        {Object.keys(this.state).map( (genre) => {
          return <SongCarousel key={`playlist ${genre}`}genre={genre} playlist={this.state[genre]} />
        })}
      </>
    );
  }
  
}

export default SongDiscover;