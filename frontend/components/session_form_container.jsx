import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SessionActions from '../actions/session_actions';
import { switchLoginForm } from '../actions/ui_actions';

const mSTP = (state, ownProps) => {
  return({
    currentForm: state.ui.currentForm,
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    loginUser: (user) => dispatch(SessionActions.loginUser(user)),
    logout: () => dispatch(SessionActions.logoutUser()),
    switchLoginForm: (mail) => dispatch(switchLoginForm(mail)),
  });
}

export default connect(mSTP, mDTP)(SessionForm);