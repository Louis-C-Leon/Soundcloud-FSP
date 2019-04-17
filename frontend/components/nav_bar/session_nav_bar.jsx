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
const LoggedInContainer = connect(mSTP, mDTP)(LoggedIn);
const LogoutButton = (props) => {
  return(
    <div className="optionsDropdownItem"
      onClick={() => {
        document.getElementById("logoutLink").click();
        props.logoutUser();
      }}>Sign Out</div>
  )
}
const ConnectedLogoutButton = connect(mSTP, mDTP)(LogoutButton)

class SessionNavBar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {dropdownHidden: true, buttonHover: false}
  }

  optionsDropdown() {
    let dropdownClass = ""
    if (this.state.dropdownHidden) {
      dropdownClass = "optionsDropdownHidden";
    }
    return(
      <div className={`optionsDropdown ${dropdownClass}`}>
        <ProtectedRoute component={ConnectedLogoutButton} />
        <div className="optionsDropdownItem"
          onClick={() => {
            let link = document.getElementById("linkedInLink");
            if (link) link.click();
          }}>About Me 
          <img className="dropdownIcon" src={window.images.linkedIn} />
        </div>
        <div className="optionsDropdownItem"
          onClick={() => {
            let link = document.getElementById("gitHubLink");
            if (link) link.click();
          }}>About SoundCrowd 
          <img className="dropdownIcon" src={window.images.gitHub} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    document.addEventListener("click", function(e){
      if (! e.target.classList.contains("optionsMenu")){
        this.setState({dropdownHidden: true, buttonSelected: false});
      }
    }.bind(this));
  }

  render() {
    let buttonClass = ""
    if (this.state.buttonSelected) {
      buttonClass = "optionsButtonSelected"
    }
    let iconStyle = {"opacity": ".6"}
    if (this.state.buttonHover) {
      iconStyle = {"opacity": "1"}
    }
    return(
      <>
        <Link to="/upload" className="hiddenLink" id="uploadLink" />
        <Link to="/" className="hiddenLink" id="logoutLink" />
        <a href="https://github.com/Louis-C-Leon/Soundcloud-FSP" className="hiddenLink" id="gitHubLink" />
        <a href="https://www.linkedin.com/in/louis-c-leon/" className="hiddenLink" id="linkedInLink" />

        <AuthRoute component={LoggedOutContainer} />
        <div className="uploadButton" onClick={() => {
          document.getElementById("uploadLink").click();
        }}>
          Upload
        </div>
        <ProtectedRoute component={LoggedInContainer} />
        <div className={`optionsMenu options subButton ${buttonClass}`}
          onClick = {(e) => {
            this.setState({dropdownHidden: !this.state.dropdownHidden,
              buttonSelected: !this.state.buttonSelected})
            }}
          onMouseEnter = {() => {this.setState({buttonHover: true})}}
          onMouseLeave = {() => {this.setState({buttonHover: false})}}>
          <img src={window.images.more} width="100%" height="100%" 
            className="optionsMenu" style={iconStyle}/>
          {this.optionsDropdown()}
        </div>
      </>
    );
  }
}


export default connect(null, mDTP)(SessionNavBar);