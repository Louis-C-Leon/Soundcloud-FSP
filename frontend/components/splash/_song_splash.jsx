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
        <img className="songArtSplash"
        src={source}
        width="175px"
        height="175px"
        onClick={() => this.props.playSong(this.props.song.id)}/>
        <div>{this.props.song.title}</div>
      </>
    )
  }
}

export default SongSplash;