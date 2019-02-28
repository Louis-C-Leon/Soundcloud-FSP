import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign([], state)
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      action.errors.forEach( (error) => {
        newState.push(error);
      });
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;