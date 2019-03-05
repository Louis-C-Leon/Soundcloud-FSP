import React from 'react'

class SongSplash extends React.Component {

  constructor(props) {
    super(props);
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
        onClick={() => this.props.playSong(this.props.song.id)}/>
        <div className="songInfo">
        <div>{this.props.song.title}</div>
        </div>
      </>
    )
  }
}

export default SongSplash;