import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.update = this.update.bind(this);
    this.state = {password: ""}
  }

  handleSubmit() {
    const user = {
      email: this.props.pendingUser.email,
      password: this.state.password,
    }
    this.props.loginUser(user)
  }

  goBack() {
    this.props.toggleForm("EmailForm", this.props.pendingUser)
  }

  update(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return(
      <form className="sessionForm" onSubmit={this.handleSubmit}>
        <div className="sessionFormContent" >
          <div className="sessionFormBox pendingUserBox" onClick={this.goBack}>{this.props.pendingUser.email}</div>
          <input className="sessionFormInput" type="password"
          placeholder="Your Password *"
          onChange={this.update}/>
          <div className="sessionFormBox" id="submitButton" onClick={this.handleSubmit}>Sign in</div>
          <div>Don't know your password?</div>
        </div>
      </form>
    );
  }
}

export default LoginForm