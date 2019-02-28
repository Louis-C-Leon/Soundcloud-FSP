import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SessionActions from '../actions/session_actions';
import { checkRegistered } from '../util/user_api_utils';

const mSTP = (state, ownProps) => {
  return({
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    loginUser: (user) => dispatch(SessionActions.loginUser(user)),
    logout: () => dispatch(SessionActions.logoutUser()),
    checkRegistered: (mail) => checkRegistered(mail),
  });
}

export default connect(mSTP, mDTP)(SessionForm);