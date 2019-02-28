import React from 'react';

class EmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState( {email: e.target.value} )
  }

  handleSubmit() {
    this.props.switchLoginForm(this.state.email)
  }

  render() {
    return(
    <form className="sessionForm" onSubmit={this.handleSubmit}>
      <button id="fb">Continue with Shmacebook</button>
      <button id="google">Continue with Floogle</button>
      <div id="or">or</div>
      <input type="text"
       id="emailInput" 
       placeholder="Your Email Address or Profile Url"
       onChange={this.update}/>
      <input type="submit" id="submitButton" value="Continue" />
      <div id="disclaimers">
        We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
        We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
      </div>
    </form>
  );
  }
}

export default EmailForm;