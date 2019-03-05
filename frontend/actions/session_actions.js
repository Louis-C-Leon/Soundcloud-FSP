import * as SessionAPIUtil from '../util/session_utils';
import * as UserActions from './user_actions';

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const logout = () => {
  return({
    type: LOGOUT_CURRENT_USER,
  });
};

export const receiveErrors = (errors) => {
  return({
    type: RECEIVE_SESSION_ERRORS,
    errors,
  });
};

export const loginUser = (user) => dispatch => {
  return SessionAPIUtil.login(user).then( 
    (data) => dispatch(UserActions.receiveCurrentUser(data)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logoutUser = () => dispatch => {
  return SessionAPIUtil.logout().then( 
    () => dispatch(logout()),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
}

export const signupUser = (user) => dispatch => {
  return SessionAPIUtil.signup(user).then(
    (data) => dispatch(UserActions.receiveCurrentUser(data)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};