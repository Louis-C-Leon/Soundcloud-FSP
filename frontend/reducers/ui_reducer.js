import * as UiActions from '../actions/ui_actions';
import * as UserActions from '../actions/user_actions';
import * as SongActions from "../actions/song_actions"

const _nullState = { modal: null, playingSong: null}

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
    case UiActions.RECEIVE_PLAY_SONG:
      newState.playingSong = action.song;
      return newState
    default:
      return state;
  }
}

export default uiReducer;