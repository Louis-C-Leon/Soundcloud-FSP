import React from 'react';
import SongContainer from "./song_container";

class SongDiscover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
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
    console.log(this.state);
    let result;
    if(Object.keys(this.props.songs) === 0) {
      result = []
    } else {
      result = Object.values(this.props.songs)
    }
    return(
      <>
        
          {Object.values(result).map((curr_song) =>{
            return(<div className="songContainer">
              <SongContainer key={curr_song.id} 
                song={curr_song} />
            </div>)})}
      </>
    );
  }
  
}

export default SongDiscover;