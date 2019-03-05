import {connect} from "react-redux";
import Player from "./player";

const mSTP = (state, ownProps) => {
  let curr_song;
  if (state.ui.playingSong === null) {
    curr_song = null;
  } else {
    curr_song = state.entities.songs[state.ui.playingSong]
  }
  return({
    song: curr_song,
  });
}

const mDTP = (dispatch, ownProps) => {
  return({

  });
}

export default connect(mSTP, mDTP)(Player);