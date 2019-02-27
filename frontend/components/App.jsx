import React from 'react';
import AuthRoute from '../util/route_util';
import LoginForm from './login_form'

const App = () => {
  return (
    <div>
      <h1>SoundCrowd</h1>
      <AuthRoute component={LoginForm} />
    </div>
  );
};

export default App;