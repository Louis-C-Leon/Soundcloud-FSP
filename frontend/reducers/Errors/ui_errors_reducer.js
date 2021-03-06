import * as UiActions from '../../actions/ui_actions';

const uiErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign([], state);
  switch(action.type) {
    case UiActions.RECEIVE_UI_ERRORS:
      action.errors.forEach( (el) => {
        newState.push(el);
      })
      return newState;
    default:
      return state;
  }
}

export default uiErrorsReducer;