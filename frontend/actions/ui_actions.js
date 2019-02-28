import {checkRegistered} from '../util/user_api_utils';
import SignupForm from '../components/signup_form';
import LoginForm from '../components/login_form';

export const RECEIVE_CURRENT_FORM = "RECEIVE_CURRENT_FORM";
export const RECEIVE_UI_ERRORS = "RECEIVE_UI_ERRORS";

export const receiveCurrentForm = (form) => {
  return ({
    type: RECEIVE_CURRENT_FORM,
    form,
  })
}

export const receiveUiErrors = (errors) => {
  return({
    type: RECEIVE_UI_ERRORS,
    errors,
  })
}

export const switchLoginForm = (mail) => dispatch => {
  return checkRegistered(mail).then( 
    (res) => { if (res === true) {
      dispatch(receiveCurrentForm(LoginForm));
    } else {
      dispatch(receiveCurrentForm(SignupForm))
    }},
    (res) => {dispatch(receiveUiErrors(res.responseJSON))}
  );
}