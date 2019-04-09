import React from "react";
import SongContainer from "./song_container";

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
    this.props.getSong(parseInt(this.props.match.params.songId));
  }

  render() {
    return(
      <SongContainer song={this.props.song} />
    )
  }
}

export default SongPage;