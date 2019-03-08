import { connect } from "react-redux";
import * as UiActions from "../../actions/ui_actions";
import * as UserActions from "../../actions/user_actions";
import * as SongActions from "../../actions/song_actions"
import UserPage from "./user_page"
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  return({
    currUser: state.session.id,
    users: state.entities.users,
    songs: state.entities.songs,
  });
}

const mDTP = (dispatch) => {
  return({
    getUser: (id) => dispatch(UserActions.getUser(id)),
    openModal: () => dispatch(UiActions.openModal("session")),
    destroySong: (id) => dispatch(SongActions.destroySong(id))})
}

export default withRouter(connect(mSTP, mDTP)(UserPage))