import React from "react";

class SongPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.songId !== prevProps.match.params.songId) {
      this.props.getSong(parseInt(this.props.match.params.songId));
    }
  }

  componentDidMount() {
    this.props.getSong(parseInt(this.props.match.params.songId))
  }

  render() {
    debugger;
    if (!this.props.song) {
      return "Loading";
    } else {
      return(
        <div className="songShowHeader">
          <div className="songShowInfo">
            <div className="songShowArtist">{this.props.song.title}</div>
            <div className="songShowTitle"></div>
            <div className="popupIcon"></div>
          </div>
        </div>
      )
    }
  }
}

export default SongPage;