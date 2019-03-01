import React from 'react';
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import * as UiActions from '../../actions/ui_actions';
import * as SessionActions from '../../actions/session_actions';
import { connect } from "react-redux";

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
      <div className="loginButton" onClick={props.openSessionModal}>Sign in</div>
      <div className="SignupButton" onClick={props.openSessionModal}>Create Account</div>
    </div>
  )
}

const LoggedIn = (props) => {
  return(
    <>
      <div onClick={props.logoutUser}>
        {props.currUser.screen_name}
      </div>
      <div className="notifications subButton"><img src={window.images.notification} /></div>
    </>
  );
}

const LoggedOutContainer = connect(null, mDTP)(LoggedOut);
const LoggedInContainer = connect(mSTP, mDTP)(LoggedIn)

const SessionNavBar = (props) => {
  return(
    <>
      <AuthRoute component={LoggedOutContainer} />
      <div className="uploadButton subButton">Upload</div>
      <ProtectedRoute component={LoggedInContainer} />
      <div className="options subButton"><img src={window.images.more} /></div>
    </>
  );
}


export default SessionNavBar;