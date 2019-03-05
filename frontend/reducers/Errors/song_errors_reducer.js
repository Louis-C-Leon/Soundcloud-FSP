import * as SongActions from '../../actions/song_actions';

const songErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SongActions.RECEIVE_SONG_ERRORS:
      return action.errors;
    default:
      return state
  }

}

export default songErrorsReducer;