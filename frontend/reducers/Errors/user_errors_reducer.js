import * as UserActions from "../../actions/user_actions";

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign([], state)
  switch(action.type) {
    case UserActions.RECEIVE_USER_ERRORS:
      return action.errors;
    case UserActions.RECEIVE_USER:
      return []
    default:
      return state;
  }
}

export default userErrorsReducer;