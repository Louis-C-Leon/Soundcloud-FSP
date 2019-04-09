import React from 'react';
import PlayerControls from './player_controls';
import ProgressBar from './progress_bar';
import SongInfo from './song_info';
import VolumeControl from './volume';

class Player extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      currTime: 0,
      duration: 0,
      playerStyle: {overflow: "hidden"}
    }
    this.audio = null;
    this.playerAudio = this.playerAudio.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.prev = this.prev.bind(this);
    this.overflow = this.overflow.bind(this)
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
        onEnded = {() => this.props.next(this.props.playlist)}
        id="playerAudio"
        controls={false}
        autoPlay={true}
        src={source} />
    );
  }

  componentDidUpdate() {
    const audio = document.getElementById("playerAudio");
    if (audio === null) return;
    if (this.props.playing && audio.paused) {
      audio.play();
    } else if (!this.props.playing && !audio.paused) {
      audio.pause();
    }
  }

  setVolume(vol) {
    const audio = document.getElementById("playerAudio");
    audio.volume = vol;
  }

  prev() {
    const audio = document.getElementById("playerAudio");
    if (audio.currentTime < 5) {
      this.props.prev(this.props.playlist);
    } else {
      audio.currentTime = 0;
    }
  }

  togglePlay() {
    const audio = document.getElementById("playerAudio");
    if (this.props.playing === false) {
      this.props.play(this.props.song.id, this.props.playlist);
    } else {
      this.props.pause();
    }
  } 

  overflow() {
    this.setState({playerStyle: {overflow: "visible"}})
  }

  render() {
    let playerClass;
    let songInfo;
    if (this.props.song === null) {
      playerClass = "playerHidden"
      songInfo = {title: ""}
    } else {
      playerClass = "playerShow"
      songInfo = this.props.song;
    }
    const audio = document.getElementById("playerAudio");
    return(
      <div className={`player ${playerClass}`}
      style={this.state.playerStyle}>
        <PlayerControls 
          playing={this.props.playing}
          togglePlay={this.togglePlay}
          next={() => this.props.next(this.props.playlist)}
          prev={this.prev}/>
        <ProgressBar 
          currTime={this.state.currTime}
          totalTime={this.state.duration}
          seek={(time) => {audio.currentTime = time}}/>
        <VolumeControl 
          overflow={this.overflow}
          setVol = {(vol) => {audio.volume = vol}}/>
        <SongInfo song={songInfo}/>
        {this.playerAudio()}
      </div>
    )
    
  }
}

export default Player;