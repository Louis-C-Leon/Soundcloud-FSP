import React from 'react'

class Player extends React.Component{
  render() {
    if (this.props.song === undefined) {
      return null
    } else {
      return(
        <audio controls autoPlay>
          <source src={this.props.song.songUrl} />
        </audio>
      );
    }
  }
}

export default Player;