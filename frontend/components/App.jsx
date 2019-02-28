import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session_form';

const App = () => {
  return (
    <div>
      <h1>SoundCrowd</h1>
      <AuthRoute component={SessionForm} />
    </div>
  );
};

export default App;