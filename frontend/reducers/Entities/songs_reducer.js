import * as SongActions from "../../actions/song_actions";
import * as UserActions from "../../actions/user_actions";

const SongsReducer = (state = {}, action) => {
  // if (state === null) {
  //   return {}
  // }
  

  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case SongActions.RECEIVE_ALL_SONGS:
      return action.songs;
    case SongActions.RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    case SongActions.REMOVE_SONG:
      delete newState[action.songId];
      return newState;
    case UserActions.RECEIVE_USER:
      Object.values(action.songs).forEach((song) => {
        newState[song.id] = song;
      })
      return newState;
    default:
      return state;
  }
}

export default SongsReducer;