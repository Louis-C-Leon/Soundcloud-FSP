import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SongShow from "./song_page";
import * as SongActions from "../../actions/song_actions";
import * as UserActions from "../../actions/user_actions";

function mSTP(state, ownProps) {
  const song = state.entities.songs[parseInt(ownProps.match.params.songId)];
  let artist;
  if (!song) {
    artist = null;
  } else {
    artist = state.entities.users[song.user_id];
  }
  return({
    song,
    user: artist
  });
}

function mDTP(dispatch, ownProps) {
  return({
    getSong: (id) => dispatch(SongActions.getSong(id)),
    getUser: (id) => dispatch(UserActions.getUser(id)),
  });
}

export default withRouter(connect(mSTP, mDTP)(SongShow));