import * as SongActions from "../../actions/song_actions";

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case SongActions.RECEIVE_ALL_SONGS:
      return action.songs;
    case SongActions.RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    default:
      return state;
  }
}

export default SongsReducer;