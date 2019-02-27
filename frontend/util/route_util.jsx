import React from 'react';
import Route from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => {
  <Route path={path} exact={exact} render={(props) => {
    if (!loggedIn){ 
      return (<Component {...props} />)
    } else {
      return (<Redirect to="/" />)
    }
  }}/>
};

const mapStateToProps = state => {
  return {loggedIn: !(state.session.id === null)};
};

const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export default AuthRoute