import * as UiActions from '../actions/ui_actions';
import * as UserActions from '../actions/user_actions';

const _nullState = { modal: null}

const uiReducer = (state = _nullState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case UiActions.OPEN_MODAL:
      newState.modal = action.modal;
      return newState;
    case UiActions.CLOSE_MODAL:
      newState.modal = null;
      return newState;
    default:
      return state;
  }
}

export default uiReducer;