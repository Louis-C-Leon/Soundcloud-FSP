import {checkRegistered} from '../util/user_api_utils';
import SignupForm from '../components/session/signup_form';
import LoginForm from '../components/session/login_form';

export const RECEIVE_CURRENT_FORM = "RECEIVE_CURRENT_FORM";
export const RECEIVE_UI_ERRORS = "RECEIVE_UI_ERRORS";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

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

export const openModal = (name) => {
  return({
    type: OPEN_MODAL,
    modal: name,
  })
}

export const closeModal = () => {
  return({
    type: CLOSE_MODAL,
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