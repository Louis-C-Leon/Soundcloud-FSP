import React from 'react';

const UserSidebarShow = (props) => {
  return(
    <div className="userSidebarShow">
    <div className="userSidebarPicBox">
      <img className="userSidebarPic" src={props.imgSrc} onClick={() => {props.clickEvent(props.user.id)}}/>
    </div>
      <div className="userSidebarInfo" onClick={() => {props.clickEvent(props.user.id)}}>{props.user.screen_name}</div>
    </div>
  );
}

export default UserSidebarShow;