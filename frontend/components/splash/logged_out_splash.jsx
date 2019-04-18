import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as UiActions from '../../actions/ui_actions';

const Splash = (props) => {
  return(
    <div className="loggedOutHeader"
      style={{"backgroundImage": `url(${window.images.stockPhotos[parseInt(Math.floor(Math.random() * 3))]})`}}>
      <div className="loggedOutHeaderBackground"></div>
      <a href="https://github.com/Louis-C-Leon/Soundcloud-FSP" className="hiddenLink" id="gitHubSplashLink" target="_blank"/>
      <div className="loggedOutContent">
        <div className="loggedOutTitle">What's next in music is first on SoundCrowd</div>
        <div className="loggedOutBody">
          Upload your first track and begin your journey. SoundCrowd gives you space to create, find your fans, and connect with other artists.
        </div>
        <div className="loggedOutButtonContainer">
          <div className="loginButton learnMoreButton" 
            onClick={() => {document.getElementById("gitHubSplashLink").click()}}>Learn More
            <img className="loggedOutSplashIcon" src={window.images.gitHub} />
          </div>
          <div className="uploadNowButton signupButton" onClick={props.openSessionModal}>
            Start Uploading Now
          </div>
        </div>
      </div>
    </div>
  )
}

const mDTP = (dispatch) => {
  return({
    openSessionModal: () => dispatch(UiActions.openModal("session"))
  })
}

const ConnectedSplash = connect(null, mDTP)(Splash)

const LoggedOutSplash = () => <Route path="/" exact component={ConnectedSplash} />

export default LoggedOutSplash;