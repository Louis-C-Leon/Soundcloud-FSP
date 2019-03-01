import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Auth = ({component: Component, path, loggedIn, exact}) => {
  return(
    <Route path={path} exact={exact} render={(props) => {
      if (!loggedIn){ 
        return (<Component {...props} />)
      } else {
        return (null);
      }
    }} />
  );
};

const Protected = ({component: Component, path, loggedIn, exact}) =>  {
  return(
    <Route path={path} exact={exact} render={(props) => {
      if (loggedIn){ 
        return (<Component {...props} />)
      } else {
        return (null);
      }
    }} />
  )
}

const mSTP = state => {
  return {loggedIn: !(state.session.id === null)};
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))
