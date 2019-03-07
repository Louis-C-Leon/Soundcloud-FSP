import React from 'react'

class SongSplash extends React.Component {

  constructor(props) {
    super(props);
    this.playSong = this.props.playSong.bind(this)
  }

  render() {
    let source;
    if (this.props.song.imageUrl === undefined) {
      source = window.images.defaultSong;
    } else {
      source = this.props.song.imageUrl
    }
    return(
      <>
        <img className="songArt"
        src={source}
        onClick={() => this.playSong(this.props.song.id, this.props.playlist)}/>
        <div className="songInfo">
        <div>{this.props.song.title}</div>
        </div>
      </>
    )
  }
}

export default SongSplash;