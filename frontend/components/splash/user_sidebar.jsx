import React from "react";
import UserSidebarShow from "./user_sidebar_show";
import { Redirect } from "react-router-dom";

class UserSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    }

    this.redirect = this.redirect.bind(this);
    this.getRedirect = this.getRedirect.bind(this);
  }
  
  componentDidMount() {
    this.props.getUsers()
  }

  getRedirect(id) {
    this.setState({redirect: `/users/${id}`});
  }

  redirect() {
    if(this.state.redirect === null) {
      return null;
    } else {
      this.setState({redirect: null});
      return <Redirect to={`${this.state.redirect}`} />
    }
  }

  render() {
    return(
      <div className="sidebar">
      {this.redirect()}
        {Object.values(this.props.users).map( (user) => {
          let imgSrc;
          if (user.photoUrl === undefined) {
            imgSrc = window.images.defaultProfile;
          } else {
            imgSrc = user.photoUrl;
          }
          return(<UserSidebarShow user={user} imgSrc={imgSrc} clickEvent={(id) => {this.getRedirect(id)}}/>)
        })}
      </div>
    );
  }
}

export default UserSidebar;