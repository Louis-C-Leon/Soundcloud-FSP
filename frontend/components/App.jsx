import React from 'react';
import SplashContainer from "./splash/splash";
import ModalContainer from './modal/modal_container';
import NavBarContainer from "./nav_bar/nav_bar_container";
import PlayerContainer from "./player/player_container";
import UploadContainer from "./upload/upload_container";
import { Route, Switch, Redirect, Link } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/upload" render={() => {return(
        <>
          <NavBarContainer />
          <ModalContainer />
          <UploadContainer />
          <PlayerContainer />
        </>
      )}} />
      <Route path="/" render={() => {return(
        <>
          <NavBarContainer />
          <ModalContainer />
          <SplashContainer />
          <PlayerContainer />
        </>
      )}} />
    </Switch>
  );
};

export default App;