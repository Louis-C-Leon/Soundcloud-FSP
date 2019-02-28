import * as UserApiUtils from '../util/user_api_utils';

export const RECEIVE_PENDING_USER = "RECEIVE_PENDING_USER"

export const receivePendingUser = (email) => {
  return({
    type: RECEIVE_PENDING_USER,
    email,
  })
}