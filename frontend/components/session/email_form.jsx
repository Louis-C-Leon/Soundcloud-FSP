import React from 'react';

class EmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      email: "",
      errors: [],
      inputClass: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.checkEmail(this.state.email).length === 0) {
      const pendingUser = {
        email: this.state.email,
        password: "",
        screenName: "",
      }
      this.props.checkRegistered(pendingUser.email).then( (registered) => {
        if(registered) {
          this.props.toggleForm("LoginForm", pendingUser);
        } else {
          this.props.toggleForm("SignupForm", pendingUser);
        }
      });
    } else {
      this.setState({
        errors: this.props.checkEmail(this.state.email),
        inputClass: "inputError",
      })
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
          <div className="sessionFormBox sessionFormButton" id="fb" onClick={() => this.props.demoLogin(this)}>Continue as Demo User</div>
          <div className="sessionFormBox sessionFormButton" id="google" onClick={() => this.props.demoLogin(this)}>Continue as Demo User</div>
          <div className="orDivider">
          <div className="divider" />
          <div id="or">or</div>
          <div className="divider" />
          </div>
          <input className={`sessionFormInput ${this.state.inputClass}`} type="text"
          placeholder="Your Email Address or Profile Url *"
          onChange={this.update}
          value={this.state.email}/>
          {this.renderErrors()}
          <div className="sessionFormBox sessionFormButton" id="submitButton" onClick={this.handleSubmit}>Continue</div>
          <div className="disclaimer">
            We may use your email and devices for updates and tips on SoundCrowd's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
          </div>
          <div className="disclaimer">
            We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
          </div>
        </div>
      </form>
  );
  }
}

export default EmailForm;