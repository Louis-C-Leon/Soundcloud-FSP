import * as SessionActions from '../actions/session_actions';
import * as UserActions from '../actions/user_actions';


const SessionReducer = (state = {id: null}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SessionActions.LOGIN_USER:
      newState["id"] = action.user.id;
      return newState;
    case SessionActions.LOGOUT_CURRENT_USER:
      newState["id"] = null;
      return newState;
    default:
      return state;
  }
}

export default SessionReducer