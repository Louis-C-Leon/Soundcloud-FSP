import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers/root_reducer";

const configureStore = (presetState = {}) => {
  return createStore(rootReducer, presetState, applyMiddleware(thunk, logger));
};

export default configureStore;