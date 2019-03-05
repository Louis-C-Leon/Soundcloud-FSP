import * as UserActions from "../../actions/user_actions";

const nullState = {}

const usersReducer = (state = nullState, action) => {

  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case UserActions.RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;