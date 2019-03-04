import session from "./session_reducer";
import entities from "./Entities/entities_reducer";
import errors from "./Errors/errors_reducer";
import ui from "./ui_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
});

export default rootReducer;