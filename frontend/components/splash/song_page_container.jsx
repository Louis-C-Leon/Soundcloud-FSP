import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SongShow from "./song_page";
import * as SongActions from "../../actions/song_actions";

function mSTP(state, ownProps) {
  return({
    song: state.entities.songs[parseInt(ownProps.match.params.songId)],
  })
}

function mDTP(dispatch, ownProps) {
  return({
    getSong: (id) => dispatch(SongActions.getSong(id)),
  });
}

export default withRouter(connect(mSTP, mDTP)(SongShow));