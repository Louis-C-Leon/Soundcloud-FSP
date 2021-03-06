import React from "react";
import { Redirect } from "react-router-dom";
import SongContainer from "./song_container";

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user: null,
      songs: [],
      edit: "false",
    }

    this.getUser = this.getUser.bind(this);
    this.edit = this.edit.bind(this);
  } 

  getUser() {
    const userParams = this.props.match.params.user;
    if (userParams === "you") {
      const you = this.props.users[this.props.currUser];
      if(you === undefined) {
        return null
      }
      this.setState({user: you, songs: you.songs, edit: "true"})
    } else {
      this.props.getUser(userParams).then((res) => {this.setState({user: res.user, songs: res.user.songs, edit: "false", redirect: false})});
    }
  }

  componentDidMount() {
    this.getUser();
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.user !== this.props.match.params.user) {
      this.getUser();
    }
  } 

  edit(id) {
    if(this.props.songs[id] === undefined) {
      return null;
    } else if (this.state.edit === "true") {
      return(<div className="editButton" onClick={() => {this.props.destroySong(id);}}>Delete Song</div>);
    } else {
      return null;
    }
  }

  render() {
    if (!this.state.user && this.props.currUser === null) {
      this.props.openModal();
      return <Redirect to="/discover" />
    }else if (!this.state.user) {
      return null;
    } else if (!this.props.match.params.user){
      return <Redirect to="/discover" />
    } else if (this.props.match.params.user !== "you" && this.state.redirect) {
      setTimeout(0, this.setState({redirect: false}));
      return <Redirect to="/users/you" />
    } else {
      let imgSrc, coverImgSrc;
      if (this.state.user.photoUrl === undefined) {
        imgSrc = window.images.defaultProfile;
      } else {
        imgSrc = this.state.user.photoUrl;
      }
      if (this.state.user.coverPhotoUrl === undefined) {
        coverImgSrc = `${window.images.stockPhotos[Math.floor(Math.random()*3)]}`;
      } else {
        coverImgSrc = `${this.state.user.coverPhotoUrl}`;
      }
      return(
        <>
        <div key="userHeader" className="userHeader" style={{backgroundImage: `url(${coverImgSrc})`, backgroundPosition: "center", backgroundSize: "cover"}}>
          <div key="userProfile" className="userPageProfileContainer">
            <img className="userPageProfile" src={imgSrc}/>
          </div>
          <div className="screenName">{this.state.user.screen_name}</div>
        </div>
        <div className="userPageTitle">Tracks</div>
        <div className="userSongs">
        {Object.keys(this.props.songs).map((songId) => {
          if (this.props.songs[songId].user_id === this.state.user.id) {
            return(
              <div className="songContainer" style={{marginTop: "30px"}}>
                <SongContainer key={`userSong#${songId}`} song={this.props.songs[songId]} />
                {this.edit(songId)}
                </div>
            );
          }})}
        </div>
        </>
      )
    }
  }
}

export default UserPage;