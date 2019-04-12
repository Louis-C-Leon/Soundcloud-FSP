import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SongShow from "./song_page";
import * as SongActions from "../../actions/song_actions";
import * as UserActions from "../../actions/user_actions";

function mSTP(state, ownProps) {
  let myPlaylist;
  if(ownProps.playlist === undefined) {
    myPlaylist = Object.keys(state.entities.songs);
  } else {
    myPlaylist = ownProps.playlist;
  }
  const song = state.entities.songs[parseInt(ownProps.match.params.songId)];
  let artist;
  if (!song) {
    artist = null;
  } else {
    artist = state.entities.users[song.user_id];
  }
  return({
    playlist: myPlaylist,
    currSong: state.ui.playingSong,
    playing: state.ui.playStatus === "play",
    song,
    user: artist
  });
}

function mDTP(dispatch, ownProps) {
  return({
    playSong: (id, playlist) => dispatch(SongActions.playSong(id, playlist)),
    pauseSong: () => dispatch(SongActions.pauseSong()),
    getSong: (id) => dispatch(SongActions.getSong(id)),
    getUser: (id) => dispatch(UserActions.getUser(id)),
  });
}

export default withRouter(connect(mSTP, mDTP)(SongShow));