import React from "react";
import UserSidebarShow from "./user_sidebar_show";
import { Link } from "react-router-dom";

class UserSidebar extends React.Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return(
      <div className="sidebar">
      <div className="sidebarHeader">Artists You Might Like</div>
        {Object.values(this.props.users).map( (user) => {
          let imgSrc;
          if (user.photoUrl === undefined) {
            imgSrc = window.images.defaultProfile;
          } else {
            imgSrc = user.photoUrl;
          }
          if (user.id !== this.props.currUser) {
           return(<UserSidebarShow key={`user#${user.id}`} user={user} imgSrc={imgSrc}/>);
          }
        })}
      </div>
    );
  }
}

export default UserSidebar;