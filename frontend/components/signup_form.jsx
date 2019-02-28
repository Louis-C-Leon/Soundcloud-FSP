import React from 'react';
import EmailForm from './email_form';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.toggleForm("EmailForm")
  }

  handleSubmit() {
    console.log("OK!")
  }
 
  render() {
    return(
      <form className="sessionForm"onSubmit={this.handleSubmit}>
        <div><h3>Creat your SoundCrowd accout</h3></div>
        <button onClick={this.goBack}>{this.props.pendingUser}</button>
        <label>Choose a password *
          <input type="text"/>
        </label>
        <div>By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</div>
        <input type="submit" value={"Accept & continue"} />
        <div>Are you trying to sign in?
          The email address that you entered was not found.
          Double-check your email address.
        </div>
      </form>
    )
  }
}

export default SignupForm