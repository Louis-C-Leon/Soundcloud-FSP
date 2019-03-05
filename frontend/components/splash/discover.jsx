import React from 'react';
import SongContainer from "./song_container";

class SongDiscover extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllSongs();
  }

  render() {
    let result;
    if(Object.keys(this.props.songs) === 0) {
      result = []
    } else {
      result = Object.values(this.props.songs)
    }
    return(
      <div className="songSplash">
        
          {Object.values(result).map((curr_song) =>{
            return(<div className="songContainer">
              <SongContainer key={curr_song.id} 
                song={curr_song} />
            </div>)})}
      </div>
    );
  }
  
}

export default SongDiscover;