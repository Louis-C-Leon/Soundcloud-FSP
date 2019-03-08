import React from "react";
import { Redirect } from "react-router-dom";
import SongContainer from "./song_container";

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user: null,
      songs: [],
      urlMatch: props.match.params.user,
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


  componentDidUpdate() {
    if (this.props.match.params.user !== this.state.urlMatch) {
      this.getUser();
      this.setState({urlMatch: this.props.match.params.user});
    }
  }

  edit() {
    if (this.state.edit === "true") {
      return(<div className="editButton" onClick={() => this.props.destroySong(song)}>Delete Song</div>);
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
    // debugger;
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
      return(
        <>
        {this.redirect()}
        <div className="userHeader">
          <div className="userPageProfileContainer">
            <img className="userPageProfile" src={imgSrc}/>
          </div>
          <div className="screenName">{this.state.user.screen_name}</div>
        </div>
        <div className="userPageTitle">Tracks</div>
        {this.state.songs.map((song) => {return(
          <div className="songContainer">
            <SongContainer key={song} song={this.props.songs[song]} />
            {this.edit()}
          </div>          
        )})}
        </>
      )
      } else {
        return null;
      }
  }
}

export default UserPage;