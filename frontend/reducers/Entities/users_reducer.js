import * as UserActions from "../../actions/user_actions";

const nullState = {}

const usersReducer = (state = nullState, action) => {

  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case UserActions.RECEIVE_USER:
      const flatUser = action.user;
      flatUser.songs= flatUser.songs.map( (song) => {return(song.id)});
      newState[action.user.id] = flatUser;
      return newState;
    case UserActions.RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
}

export default usersReducer;