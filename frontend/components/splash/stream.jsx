import React from "react";
import SongContainer from "./song_container";

class Stream extends React.Component {

  componentDidMount() {
    this.props.getAllSongs();
  }

  render() {
    return(
      <>
      <div className="discoverHeader">Browse Fresh Pressed Tracks</div>
      {Object.values(this.props.songs).map( (curr_song) => {
        return(<div className="songContainer">
              <SongContainer key={curr_song.id} 
                 song={curr_song} />
              </div>)
      })}
      </>
    );
  }

}

export default Stream;