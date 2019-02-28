import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import ui from './ui_errors_reducer';

export default combineReducers({
  session,
  ui,
})