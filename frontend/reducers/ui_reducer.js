import * as UiActions from '../actions/ui_actions';
import * as UserActions from '../actions/user_actions';
import * as SongActions from "../actions/song_actions"

const _nullState = { modal: null, playingSong: null, nextSong: null, prevSong: null, playStatus: "play"}

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
    // case UserActions.RECEIVE_CURRENT_USER:
    //   newState.modal = null;
    //   return newState;
    case SongActions.PLAY_SONG:
      newState.playStatus = "play";
      newState.playingSong = action.songId;
      newState.nextSong = action.nextSong;
      newState.prevSong = action.prevSong;
      return newState
    case SongActions.NEXT_SONG:
      newState.playingSong = state.nextSong;
      newState.nextSong = action.nextSong;
      newState.prevSong = state.playingSong;
      return newState;
    case SongActions.PREV_SONG:
      newState.playingSong = state.prevSong;
      newState.nextSong = state.playingSong;
      newState.prevSong = action.prevSong;
      return newState;
    case SongActions.PAUSE_SONG:
      newState.playStatus = "pause";
      return newState;
    case SongActions.REMOVE_SONG:
      newState.playingSong = null;
      return newState;
    default:
      return state;
  }
}

export default uiReducer;