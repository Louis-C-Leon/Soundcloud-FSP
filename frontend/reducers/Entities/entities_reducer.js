import users from "./users_reducer";
import songs from "./songs_reducer"
import { combineReducers } from "redux";

export default combineReducers({
  users,
  songs,
})