import React from "react";

class SongPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.songId !== prevProps.match.params.songId) {
      this.props.getSong(parseInt(this.props.match.params.songId)).then( () =>{
        this.props.getUser(this.props.song.user_id);
      });
    }
  }
  
  componentDidMount() {
    this.props.getSong(parseInt(this.props.match.params.songId)).then( () =>{
      this.props.getUser(this.props.song.user_id);
    });
  }

  render() {
    if (!this.props.song || !this.props.user) {
      return "Loading";
    } else {
      return(
        <div className="songShowHeader">
          <div className="songShowInfo">
            <div className="songShowArtist">{this.props.user.full_name}</div>
            <div className="songShowTitle">{this.props.song.title}</div>
            <div className="popupIcon"></div>
            <img className="songShowPicture" src={this.props.song.imageUrl}/>
          </div>
        </div>
      )
    }
  }
}

export default SongPage;