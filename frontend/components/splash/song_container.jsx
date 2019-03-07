import { connect } from "react-redux";
import SongSplash from "./_song_splash";
import { strictEqual } from "assert";
import * as SongActions from "../../actions/song_actions"

const mSTP = (state, ownProps) => {
  return({
    playlist: Object.keys(state.entities.songs),
    currSong: state.ui.playingSong,
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    playSong: (id, playlist) => dispatch(SongActions.playSong(id, playlist)),
  });
}

export default connect(mSTP, mDTP)(SongSplash)