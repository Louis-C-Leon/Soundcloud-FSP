import React from 'react';
import EmailForm from './email_form';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.goBack = this.goBack.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.state = {
      password: "",
      errors: [],
      inputClass: ""
    };
  }

  goBack() {
    this.props.toggleForm("EmailForm");
  }

  update(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.checkPassword(this.state.password).length === 0) {
      this.props.pendingUser.password = this.state.password;
      this.props.toggleForm("SignupForm2", this.props.pendingUser);
    } else {
      this.setState({
        errors: this.props.checkPassword(this.state.password),
        inputClass: "inputError",
      });
    }
  }

  renderErrors() {
    if(this.state.errors.length === 0) {
      return null;
    } else {
      return(
        <div className="errorDiv">
          {this.state.errors.map((err) => (
              <div key={`${err}`} className="errorDiv">
                {err}
              </div>
            ))}
        </div>
      )
    }
  }
 
  render() {
    return(
      <form className="sessionForm" onSubmit={this.handleSubmit}>
        <div className="sessionFormContent" >
        <div id="signupHeader">Create your SoundCrowd Account</div>
        <div className="sessionFormBox sessionFormButton pendingUserBox" onClick={this.goBack}>{this.props.pendingUser.email}</div>
          <label>Choose a Password *
          <input className={`sessionFormInput ${this.state.inputClass}`} type="password"
          onChange={this.update}/>
          </label>
          {this.renderErrors()}
          <div className="disclaimer">By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</div>
          <div className="sessionFormBox sessionFormButton" id="submitButton" onClick={this.handleSubmit}>Continue</div>
          <div id="signupQuestions">
            Are you trying to sign in?
            The email address that you entered was not found.
            Double-check your email address.
          </div>
        </div>
      </form>
    );
  }
}

export default SignupForm;