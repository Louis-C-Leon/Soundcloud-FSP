import React from 'react';

class SignupForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = {screenName: ""}
  }

  update(e) {
    this.setState({screenName: e.target.value});
  }

  handleSubmit() {
    const user = {
      email: this.props.pendingUser.email,
      password: this.props.pendingUser.password,
      screen_name: this.state.screenName,
    };
    this.props.signupUser(user);
  }
 
  render() {
    return(
      <form className="sessionForm" onSubmit={this.handleSubmit}>
        <div className="sessionFormContent" >
        <div id="signupHeader">Tell us a bit about yourself</div>
          <label>Choose your display name *
          <input className="sessionFormInput" type="text"
          onChange={this.update}/>
          </label>
          <div className="disclaimer">Your display name can be anything you like. Your name or artist name are good choices.</div>
          <div className="sessionFormBox" id="submitButton" onClick={this.handleSubmit}>Get started</div>
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

export default SignupForm2