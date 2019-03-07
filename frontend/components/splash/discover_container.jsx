import { connect } from 'react-redux';
import * as SongActions from "../../actions/song_actions";
import * as UiActions from "../../actions/ui_actions";
import Discover from "./discover"


const mSTP = (state, ownProps) => {
  return({
    songs: state.entities.songs,
    artists: state.entities.users,
  });
};

const mDTP = (dispatch, ownProps) => {
  return({
    getAllSongs: () => dispatch(SongActions.getAllSongs()),
    playSong: (id, playlist) => dispatch(SongActions.playSong(id, playlist)),
  });
};

export default connect(mSTP, mDTP)(Discover);