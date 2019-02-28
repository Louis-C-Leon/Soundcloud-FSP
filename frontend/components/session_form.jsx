import React from 'react';
import EmailForm from './email_form';
import LoginForm from './login_form';
import SignupForm from './signup_form';

class SessionForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      currForm: "EmailForm"
    }
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(formString) {
    this.setState({currForm: formString})
  }

  render() {
    switch(this.state.currForm) {
      case("EmailForm"):
        return(<EmailForm 
                toggleForm={this.toggleForm}
                checkRegistered={this.props.checkRegistered}
                receivePendingUser={this.props.receivePendingUser}
                pendingUser={this.props.pendingUser}
              />);
      case("LoginForm"):
        return(<LoginForm 
                toggleForm={this.toggleForm}
                checkRegistered={this.props.checkRegistered}
                pendingUser={this.props.pendingUser}
              />);
      case("SignupForm"):
        return(<SignupForm 
                toggleForm={this.toggleForm}
                checkRegistered={this.props.checkRegistered}
                pendingUser={this.props.pendingUser}
              />);
    }
  }
}

export default SessionForm;