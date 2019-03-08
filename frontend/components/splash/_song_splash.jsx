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
    } else {
      let source;
      if (this.props.song.imageUrl === undefined) {
        source = window.images.defaultSong;
      } else {
        source = this.props.song.imageUrl
      }
      return(
        <>
          <img className="songArt"src={source}/>
          <div className={`${this.state.icon} playIcon`}
            onMouseEnter={() => {this.setState({icon: "playIconShow"})}}
            onMouseLeave={() => {this.setState({icon: "playIconHidden"})}}
            onClick={() => this.playSong(this.props.song.id, this.props.playlist)}>
              <img className="popupIcon" src={window.images.playIcon}/>
          </div>
          <div className="songInfo">
          <div>{this.props.song.title}</div>
          </div>
        </>
      )
    }
  }
}

export default SongSplash;