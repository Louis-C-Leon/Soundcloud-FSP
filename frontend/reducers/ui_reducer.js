import * as UiActions from '../actions/ui_actions';
import * as UserActions from '../actions/user_actions';

const _nullState = {currentForm: null, pendingUser: null}

const uiReducer = (state = _nullState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case UiActions.RECEIVE_CURRENT_FORM:
      newState.currentForm = action.form;
      return newState;
    case UserActions.RECEIVE_PENDING_USER:
      newState.pendingUser = action.email;
      return newState;
    default:
      return state;
  }
}

export default uiReducer;