import { connect } from "react-redux";
import * as UiActions from "../../actions/ui_actions";
import * as SongActions from "../../actions/song_actions"
import Library from "./library"

const mSTP = (state) => {
  const userSongs = []
  Object.values(state.entities.songs).forEach((song) => {
    if(song.user_id === state.session.id) {
      userSongs.push(song);
    }
  });
  return({
    currUser: state.entities.users[state.session.id],
    songs: userSongs,
  });
}

const mDTP = (dispatch) => {
  return({
    openModal: () => dispatch(UiActions.openModal("session")),
    destroySong: (id) => dispatch(SongActions.destroySong(id)),
  })
}

export default connect(mSTP, mDTP)(Library)