import * as UserApiUtils from '../util/user_api_utils';

export const RECEIVE_PENDING_USER = "RECEIVE_PENDING_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receivePendingUser = (email) => {
  return({
    type: RECEIVE_PENDING_USER,
    email,
  })
}

export const receiveCurrentUser = (user) => {
  return({
    type: RECEIVE_CURRENT_USER,
    user,
  });
};