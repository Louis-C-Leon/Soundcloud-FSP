import * as SessionAPIUtil from '../util/session_api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => {
  return({
    type: RECEIVE_CURRENT_USER,
    user,
  });
};

export const logout = () => {
  return({
    type: LOGOUT_CURRENT_USER,
  });
};

export const receiveErrors = (err) => {
  return({
    type: RECEIVE_SESSION_ERRORS,
    err,
  })
}

export const loginUser = (user) => dispatch => {
  return SessionAPIUtil.login(user).then( 
    (data) => dispatch(receiveCurrentUser(data)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
}

export const logoutUser = () => dispatch => {
  return SessionAPIUtil.logout().then( 
    () => dispatch(logout()),
    (err) => dispatch(receiveErrors(err))
  );
}