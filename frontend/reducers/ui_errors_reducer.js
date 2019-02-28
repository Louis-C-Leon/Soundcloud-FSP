import * as UiAction from '../actions/ui_actions';

const uiErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign([], state);
  switch(action.type) {
    case UiAction.RECEIVE_UI_ERRORS:
      action.errors.forEach( (el) => {
        newState.push(el);
      })
      return newState;
    case UiAction.RECEIVE_CURRENT_FORM:
      return [];
    default:
      return state;
  }
}

export default uiErrorsReducer;