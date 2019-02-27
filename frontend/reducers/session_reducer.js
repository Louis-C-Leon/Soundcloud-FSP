import * as SessionActions from '../actions/session_actions';


const SessionReducer = (state = {currentUserId: null}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      newState[currentUserId] = action.user.id;
      return newState;
    case SessionActions.LOGOUT_CURRENT_USER:
      newState[currentUserId] = null;
      return newState;
    default:
      return state;
  }
}

export default SessionReducer