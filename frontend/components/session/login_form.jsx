import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.state = {
      password: "",
      errors: [],
      inputClass: "",
      demo: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const registerState = this.setState.bind(this);
    this.setState({password: document.querySelector(".sessionFormInput").value}, () => {
      if(this.props.checkPassword(this.state.password).length === 0) {
        const user = {
          email: this.props.pendingUser.email,
          password: this.state.password
        }
        this.props.loginUser(user).then( () => this.props.close(),(err) => {
          registerState({errors: err.errors})
        } )
      } else {
        this.setState({
          errors: this.props.checkPassword(this.state.password),
          inputClass: "inputError",
        })
      }
    })
  }

  goBack() {
    this.props.toggleForm("EmailForm", this.props.pendingUser)
  }

  update(e) {
    this.setState({password: e.target.value});
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
          <div className="sessionFormBox sessionFormButton pendingUserBox" onClick={this.goBack}>{this.props.pendingUser.email}</div>
          <input className={`sessionFormInput ${this.state.inputClass}`} type="password"
          placeholder="Your Password *"
          onChange={this.update}/>
          {this.renderErrors()}
          <div className="sessionFormBox sessionFormButton" id="submitButton" onClick={this.handleSubmit}>Sign in</div>
          <div>Don't know your password?</div>
        </div>
      </form>
    );
  }
}

export default LoginForm