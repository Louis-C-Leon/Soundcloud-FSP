import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form_container';

const App = () => {
  return (
    <div>
      <h1>SoundCrowd</h1>
      <AuthRoute component={SessionFormContainer} />
    </div>
  );
};

export default App;