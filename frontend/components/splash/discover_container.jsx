import { connect } from 'react-redux';
import * as SongActions from "../../actions/song_actions";
import * as UiActions from "../../actions/ui_actions";
import Discover from "./discover"

const mSTP = (state, ownProps) => {
  return({
    songs: state.entities.songs,
  });
};

const mDTP = (dispatch, ownProps) => {
  return({
    getAllSongs: () => dispatch(SongActions.getAllSongs()),
    playSong: (song) => dispatch(UiActions.receivePlayingSong(song)),
  });
};

export default connect(mSTP, mDTP)(Discover);