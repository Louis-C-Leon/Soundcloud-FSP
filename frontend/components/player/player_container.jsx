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
  let now_playing;
  if (state.ui.playStatus === "play") {
    now_playing = true;
  } else if (state.ui.playStatus === "pause") {
    now_playing = false;
  }
  return({
    playing: now_playing,
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