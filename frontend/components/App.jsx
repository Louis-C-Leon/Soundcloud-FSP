import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./splash";
import NavBar from "./nav_bar";
import ModalContainer from './modal_container';

const App = () => {
  return (
    <div>
      <NavBar />
      <Splash />
      <ModalContainer />
      <div className="iconCredits">Icons made by 
        <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from 
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 
        licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </div>
    </div>
  );
};

export default App;