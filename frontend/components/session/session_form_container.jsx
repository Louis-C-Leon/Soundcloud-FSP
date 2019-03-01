import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SessionActions from '../../actions/session_actions';
import * as UserActions from '../../actions/user_actions';
import { checkRegistered } from '../../util/user_api_utils';

const mSTP = (state, ownProps) => {
  return({
    currentForm: state.ui.currentForm,
    pendingUser: state.ui.pendingUser,
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    signupUser: (user) => dispatch(SessionActions.signupUser(user)),
    loginUser: (user) => dispatch(SessionActions.loginUser(user)),
    logout: () => dispatch(SessionActions.logoutUser()),
    receivePendingUser: (mail) => dispatch(UserActions.receivePendingUser(mail)),
    checkRegistered: (mail) => checkRegistered(mail).then( res => {return(res)}),
  });
}

export default connect(mSTP, mDTP)(SessionForm);