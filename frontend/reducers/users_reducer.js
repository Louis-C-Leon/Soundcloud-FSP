import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullState = {}

const usersReducer = (state = nullState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
    default:
      return state;
  }
}

export default usersReducer;