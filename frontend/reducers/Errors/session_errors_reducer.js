import * as SessionActions from "../../actions/session_actions";
import * as UserActions from "../../actions/user_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign([], state)
  switch(action.type) {
    case SessionActions.RECEIVE_SESSION_ERRORS:
      return action.errors;
    case UserActions.RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;