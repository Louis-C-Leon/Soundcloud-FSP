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
    this.redirect = this.redirect.bind(this);

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
      this.props.getUser(userParams).then((res) => {this.setState({user: res.user, songs: res.user.songs, edit: "false"})});
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

  redirect() {
    if(this.props.currUser === this.state.user.id) {
      return <Redirect to="/users/you" />
    } else {
      return null;
    }
  }

  render() {
    if (this.props.match.params.user && this.props.currUser === null) {
      this.props.openModal();
      return <Redirect to="/discover" />
    } else if (this.state.user !== null) {
      let imgSrc;
      if (this.state.user.photoUrl === undefined) {
        imgSrc = window.images.defaultProfile;
      } else {
        imgSrc = this.state.user.photoUrl;
      }
      const stockImage = `${window.images.stockPhotos[Math.floor(Math.random()*3)]}`
      return(
        <>
        {this.redirect()}
        <div key="userHeader" className="userHeader" style={{backgroundImage: `url(${stockImage})`, backgroundPosition: "center", backgroundSize: "cover"}}>
          <div key="userProfile" className="userPageProfileContainer">
            <img className="userPageProfile" src={imgSrc}/>
          </div>
          <div className="screenName">{this.state.user.screen_name}</div>
        </div>
        <div className="userPageTitle">Tracks</div>
        {Object.keys(this.props.songs).map((songId) => {
          if (this.props.songs[songId].user_id === this.state.user.id) {
            return(<div className="songContainer" style={{marginTop: "30px"}}>
            <SongContainer key={`userSong#${songId}`} song={this.props.songs[songId]} />
            {this.edit(songId)}
          </div>
        )}})}
        </>
      )
      } else {
        return null;
      }
  }
}

export default UserPage;