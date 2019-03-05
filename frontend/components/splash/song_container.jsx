import { connect } from "react-redux";
import SongSplash from "./_song_splash";
import { strictEqual } from "assert";
import * as SongActions from "../../actions/song_actions"

const mSTP = (state, ownProps) => {
  return({
    currSong: state.ui.playingSong
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    playSong: (id) => dispatch(SongActions.playSong(id)),
  });
}

export default connect(mSTP, mDTP)(SongSplash)