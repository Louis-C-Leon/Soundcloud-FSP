import React from 'react';
import Song from "./_song_splash";

class SongDiscover extends React.Component {

  constructor(props) {
    super(props);
    this.props.getAllSongs();
  }

  render() {
    return(
      <div className="songSplash">
        {Object.values(this.props.songs).map((curr_song) =>{
          return(<Song key={curr_song.id} song={curr_song} 
          playSong={this.props.playSong}/>);
        })}
      </div>
    );
  }
}

export default SongDiscover;