import React from 'react';
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import * as UiActions from '../../actions/ui_actions';
import * as SessionActions from '../../actions/session_actions';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mDTP = (dispatch) => {
  return({
    logoutUser: () => dispatch(SessionActions.logoutUser()),
    openSessionModal: () => dispatch(UiActions.openModal("session")),
  })  
}

const mSTP = (state) => {
  const id = state.session.id;
  return({
    currUser: state.entities.users[`${id}`],
  })
}

const LoggedOut = (props) => {
  return(
    <div className="sessionBar">
      <div className="loginButton" 
      onClick={props.openSessionModal}> 
        Sign in
      </div>
      <div className="signupButton" 
      onClick={props.openSessionModal}>
        Create Account
      </div>
    </div>
  )
}

const LoggedIn = (props) => {
  let imageSource;
  if (props.currUser.photoUrl === undefined) {
    imageSource = window.images.defaultProfile;
  } else {
    imageSource = props.currUser.photoUrl
  }
  return(
    <>
      <Link to="/users/you" className="hiddenLink" id="profileLink" />
      <div className="navbarProfile" onClick={() => {
        const link = document.getElementById("profileLink");
        link.click();
      }}>
        <div className="navbarPicContainer">
          <img className="navbarPic" src={imageSource}/>
        </div>
        <div className="username">{props.currUser.screen_name}</div>
      </div>
    </>
  );
}

const LoggedOutContainer = connect(null, mDTP)(LoggedOut);
const LoggedInContainer = connect(mSTP, mDTP)(LoggedIn)

class SessionNavBar extends React.Component{
  constructor(props) {
    super(props)
    this.setState = this.setState.bind(this);
  }

  render() {
    return(
      <>
        <Link to="/upload" className="hiddenLink" id="uploadLink" />
        <AuthRoute component={LoggedOutContainer} />
        <div className="uploadButton" onClick={() => {
          document.getElementById("uploadLink").click();
        }}>
          Upload
        </div>
        <ProtectedRoute component={LoggedInContainer} />
        <div className="options subButton" onClick = {() => this.props.logoutUser()}><img src={window.images.more} width="100%" height="100%"/></div>
      </>
    );
  }
}


export default connect(null, mDTP)(SessionNavBar);