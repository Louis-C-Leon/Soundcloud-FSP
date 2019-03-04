import {connect} from "react-redux";
import Player from "./player";

const mSTP = (state, ownProps) => {
  return({
    song: state.entities.songs[state.ui.playingSong],
  });
}

const mDTP = (dispatch, ownProps) => {
  return({

  });
}

export default connect(mSTP, mDTP)(Player);