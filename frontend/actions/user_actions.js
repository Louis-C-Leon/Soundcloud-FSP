import * as UserApiUtils from '../util/user_utils';

export const RECEIVE_PENDING_USER = "RECEIVE_PENDING_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUserErrors = (errors) => {
  return({
    type: RECEIVE_USER_ERRORS,
    errors,
  });
}

export const receivePendingUser = (email) => {
  return({
    type: RECEIVE_PENDING_USER,
    email,
  });
}

export const getUser = (id) => dispatch => {
  return UserApiUtils.fetchUser(id).then(
    (data) => dispatch(receiveUser(data)),
    (err) => dispatch(receiveUserErrors(err.responseJSON))
  );
}

export const getUsers = () => dispatch => {
  return UserApiUtils.fetchUsers().then(
    (data) => dispatch(receiveUsers(data)),
    (err) => dispatch(receiveUserErrors(err.responseJSON))
  );
}

export const receiveUser = (userData) => {
  const user = userData;
  
  let songs;
  if(userData.songs === undefined) {
    songs = {}
    user.songs = []
  } else {
    songs = userData.songs
    user.songs = Object.values(user.songs);
  }
  return({
    type: RECEIVE_USER,
    user,
    songs,
  });
};

export const receiveUsers = (users) => {
  return({
    type: RECEIVE_USERS,
    users,
  })
}