import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./splash";
import ModalContainer from './modal_container';

const App = () => {
  return (
    <div>
      <h1>SoundCrowd</h1>
      <Splash />
      <ModalContainer />
    </div>
  );
};

export default App;