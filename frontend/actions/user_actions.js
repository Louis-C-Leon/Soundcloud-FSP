import * as UserApiUtils from '../util/user_utils';

export const RECEIVE_PENDING_USER = "RECEIVE_PENDING_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receivePendingUser = (email) => {
  return({
    type: RECEIVE_PENDING_USER,
    email,
  })
}

export const receiveCurrentUser = (userData) => {
  const user = userData
  
  let songs;
  if(userData.songs === undefined) {
    songs = {}
    user.songs = []
  } else {
    songs = userData.songs
    user.songs = Object.values(user.songs);
  }
  return({
    type: RECEIVE_CURRENT_USER,
    user,
    songs,
  });
};

export const receiveUser = (userData) => {
  const user = userData
  user.songs = Object.values(user.songs);
  const songs = userData.songs
  return({
    type: RECEIVE_USER,
    user,
    songs,
  })
}