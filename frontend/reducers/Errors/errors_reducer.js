import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import songs from './song_errors_reducer';
import ui from './ui_errors_reducer';
import users from './user_errors_reducer'

export default combineReducers({
  session,
  ui,
  songs,
  users
})