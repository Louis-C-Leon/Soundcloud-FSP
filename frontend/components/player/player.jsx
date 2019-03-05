import React from 'react';
import PlayerControls from './player_controls';
import ProgressBar from './progress_bar';
import SongInfo from './song_info';

// Aww yeah React audio player from scratch!

class Player extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      currTime: 0,
      duration: 0,
    }
    this.playerAudio = this.playerAudio.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  playerAudio() {
    let source;
    if(this.props.song === null) {
      source = null;
    } else {
      source = this.props.song.songUrl
    }
    return(
      <audio
        onCanPlay = {() => this.setState({duration: document.getElementById("playerAudio").duration})}
        onTimeUpdate = {() => this.setState({currTime: document.getElementById("playerAudio").currentTime})}
        id="playerAudio"
        controls={false}
        autoPlay={true}
        src={source} />
    );
  }

  togglePlay() {
    const audio = document.getElementById("playerAudio")
    if (this.state.playing === false) {
      this.setState({playing: true})
      audio.play()
    } else {
      this.setState({playing: false})
      audio.pause()
    }
  }

  render() {
    console.log(this.state);
    if (this.props.song === null) {
      return null
    } else {
      return(
        <div className="player">
          <PlayerControls togglePlay={this.togglePlay}/>
          <ProgressBar 
            currTime={this.state.currTime}
            totalTime={this.state.duration}/>
          <SongInfo song={this.props.song}/>
          {this.playerAudio()}
        </div>
      )
    }
  }
}

export default Player;