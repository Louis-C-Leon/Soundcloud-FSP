import {connect} from "react-redux";
import Player from "./player";
import * as SongActions from "../../actions/song_actions";

const mSTP = (state, ownProps) => {
  let curr_song;
  if (state.ui.playingSong === null) {
    curr_song = null;
  } else {
    curr_song = state.entities.songs[state.ui.playingSong]
  }
  return({
    playing: state.ui.playStatus === "play",
    song: curr_song,
    playlist: Object.keys(state.entities.songs),
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    next: (playlist) => dispatch(SongActions.nextSong(playlist)),
    prev: (playlist) => dispatch(SongActions.prevSong(playlist)),
    play: (id, playlist) => dispatch(SongActions.playSong(id, playlist)),
    pause: () => dispatch(SongActions.pauseSong()),
  });
}

export default connect(mSTP, mDTP)(Player);