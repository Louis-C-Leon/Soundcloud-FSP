import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState[errors] = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState[errors] = [];
      return newState;
    default:
      return state;
  }
}

export default sessionErrorsReducer;