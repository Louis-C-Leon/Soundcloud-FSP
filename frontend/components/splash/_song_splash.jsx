import React from 'react'

class SongSplash extends React.Component {

  constructor(props) {
    super(props);
    this.playSong = this.props.playSong.bind(this)
    this.state = {
      icon: "playIconHidden",
    }
  }

  render() {
    if (this.props.song === undefined) {
      return null;
    }
    let source, popupClass, popupFunc;
    if (this.props.song.imageUrl === undefined) {
      source = window.images.defaultSong;
    } else {
      source = this.props.song.imageUrl
    }
    if (this.props.playing && this.props.currSong === this.props.song.id) {
      popupClass = "popupPause";
      popupFunc = this.props.pauseSong;
    } else {
      popupClass = "popupPlay";
      popupFunc = () => this.playSong(this.props.song.id, this.props.playlist);
    }
    return(
      <>
        <img className="songArt"src={source}/>
        <div className={`${this.state.icon} playIcon`}
          onMouseEnter={() => {this.setState({icon: "playIconShow"})}}
          onMouseLeave={() => {this.setState({icon: "playIconHidden"})}}
          onClick={popupFunc}>
            <div className={`popupIcon ${popupClass}`}/>
        </div>
        <div className="songInfo">
        <div>{this.props.song.title}</div>
        </div>
      </>
    )
  }
}


export default SongSplash;