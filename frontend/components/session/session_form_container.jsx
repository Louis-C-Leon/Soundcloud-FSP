import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SessionActions from '../../actions/session_actions';
import * as UserActions from '../../actions/user_actions';
import { checkRegistered } from '../../util/user_utils';
window.checkRegistered = checkRegistered;
import { checkEmail, checkPassword, checkScreenName } from "../../util/session_utils";


const mSTP = (state, ownProps) => {
  return({
    sessionErrors: state.errors.session,
    loggedIn: !(state.session.id === null),
  });
}

const mDTP = (dispatch, ownProps) => {
  return({
    checkEmail: (email) => checkEmail(email),
    checkPassword: (pass) => checkPassword(pass),
    checkScreenName: (name) => checkScreenName(name),
    close: () => ownProps.close(),
    signupUser: (user) => dispatch(SessionActions.signupUser(user)),
    loginUser: (user) => dispatch(SessionActions.loginUser(user)),
    logout: () => dispatch(SessionActions.logoutUser()),
    receivePendingUser: (mail) => dispatch(UserActions.receivePendingUser(mail)),
    checkRegistered: (mail) => checkRegistered(mail).then( res => {return(res)}),
  });
}

export default connect(mSTP, mDTP)(SessionForm);