import React from 'react';
import EmailForm from './email_form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleSubmit() {
    console.log("OK!");
  }

  goBack() {
    this.props.toggleForm()
  }

  render() {
    return(
      <div className="sessionModal">
      <form className="sessionForm" onSubmit={this.handleSubmit}>
        <div className="sessionFormContent" >
          <div className="sessionFormBox sessionFormButton" onClick={this.goBack}>{this.props.pendingUser}</div>
          <input className="sessionFormInput" type="text"
          placeholder="Your Password *"
          onChange={this.update}/>
          <div className="sessionFormBox sessionFormButton" id="submitButton" onClick={this.handleSubmit}>Sign in</div>
          <div>Don't know your password?</div>
        </div>
      </form>
      </div>
    );
  }
}

export default LoginForm