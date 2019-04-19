import React from "react";
import { Link } from "react-router-dom";
import SongShowGraphic from "./song_show_graphic";
import analyze from 'rgbaster';
class SongPage extends React.Component {

  constructor(props) {
    super(props);
    this.playSong = this.props.playSong.bind(this);
    this.state = {headerColor: "rgb(50, 50, 50)"}
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.songId !== prevProps.match.params.songId) {
      this.props.getSong(parseInt(this.props.match.params.songId)).then( () =>{
        this.props.getUser(this.props.song.user_id);
      });
    }
    // if (this.props.song !== prevProps.song && document.querySelector(".songShowPicture")) {
    //   analyze(this.getBase64Image(document.querySelector(".songShowPicture"))).then( (res) => { 
    //     console.log(res[0]);
    //     this.setState({headerColor: res[0].color});
    //   })
    // }
  }
  
  componentDidMount() {
    this.props.getSong(parseInt(this.props.match.params.songId)).then( () =>{
      this.props.getUser(this.props.song.user_id);
    });
  }

  getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    return dataURL//.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  render() {
    if (!this.props.song || !this.props.user) {
      return "Loading";
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
    // const header = document.querySelector(".songShowHeader")
    // if (header) {
    //   header.style.backgroundColor = this.state.headerColor;
    // }
    return(
      <div className="songShowHeader" style={{"background": "linear-gradient(90deg, rgba(36,20,0,1) 0%, rgba(121,67,9,1) 100%)"}}>
        <div className="songTitleArtistButton">
        <div className={`playIconShow playIcon songShowPlayIcon`} onClick={popupFunc}>
            <div className={`songShowPlayButton popupIcon ${popupClass}`}/>
        </div>
          <div className="songShowInfo">
            <Link className="pageHeaderText songShowArtist" to={`/users/${this.props.user.id}`}>{this.props.user.full_name}</Link>
            <span className="pageHeaderText songShowTitle">{this.props.song.title}</span>
          </div>
        </div>
        <div className="songShowPictureContainer">
          <img className="songShowPicture" src={source}/>
        </div>
        <div className="songGraphicContainer">
          <SongShowGraphic song={this.props.song} currSong={this.props.currSong}/>
        </div>
      </div>
    )
  }
}

export default SongPage;