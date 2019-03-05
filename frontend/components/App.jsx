import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from "./splash/splash";
import ModalContainer from './modal/modal_container';
import NavBarContainer from "./nav_bar/nav_bar_container";
import PlayerContainer from "./player/player_container";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => {return(<Redirect to="/discover" />)}} />
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