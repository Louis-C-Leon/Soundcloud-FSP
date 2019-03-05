import { connect } from 'react-redux';
import UploadForm from './upload';
import * as SongActions from '../../actions/song_actions';
import * as UiActions from '../../actions/ui_actions';

const mSTP = (state) => {
  return({
    userId: state.session.id
  });
}

const mDTP = (dispatch) => {
  return({
    createSong: (song) => dispatch(SongActions.createSong(song)),
    openModal: () => dispatch(UiActions.openModal("session")),
  })
}

export default connect(mSTP, mDTP)(UploadForm);