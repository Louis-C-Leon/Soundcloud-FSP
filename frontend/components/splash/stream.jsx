import React from "react";
import SongContainer from "./song_container";

class Stream extends React.Component {

  componentDidMount() {
    this.props.getAllSongs();
  }

  render() {
    console.log("rendering", this.props);
    return(
      <div>Some Text</div>
    )
    return(
      <>
      <div className="discoverHeader">Browse Fresh Pressed Tracks</div>
      {Object.values(this.props.songs).map( (curr_song) => {
        return(<div className="songContainer" key={`streamSong#${curr_song.id}`}>
              <SongContainer key={curr_song.id} 
                 song={curr_song} />
              </div>)
      })}
      </>
    );
  }

}

export default Stream;