import React from 'react';
import { Link } from 'react-router-dom'

const UserSidebarShow = (props) => {
  const linkId = `userSidebarLink${props.user.id}`
  const linkClick = () => document.getElementById(linkId).click();
  return(
    <div className="userSidebarShow">
      <Link to={`/users/${props.user.id}`} className="hiddenLink" id={linkId} />
      <div className="userSidebarPicBox">
        <img className="userSidebarPic" src={props.imgSrc} onClick={linkClick}/>
      </div>
      <div className="userSidebarInfo" onClick={linkClick}>{props.user.screen_name}</div>
    </div>
  );
}

export default UserSidebarShow;