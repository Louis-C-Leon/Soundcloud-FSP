import { connect } from "react-redux";
import SongSplash from "./_song_splash";
import { strictEqual } from "assert";
import * as SongActions from "../../actions/song_actions"

const mSTP = (state, ownProps) => {
  let myPlaylist;
  if(ownProps.playlist === undefined) {
    myPlaylist = Object.keys(state.entities.songs);
  } else {
    myPlaylist = ownProps.playlist;
  }
  return({
    playlist: myPlaylist,
    currSong: state.ui.playingSong,
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    playSong: (id, playlist) => dispatch(SongActions.playSong(id, playlist)),
  });
}

export default connect(mSTP, mDTP)(SongSplash)