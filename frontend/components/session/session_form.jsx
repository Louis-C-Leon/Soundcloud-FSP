import React from 'react';
import EmailForm from './email_form';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import SignupForm2 from './signup_form_2';

class SessionForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      currForm: "EmailForm",
      pendingUser: {},
    }
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(formString, pendingUser) {
    this.setState({
      currForm: formString,
      pendingUser: pendingUser,
    })
  }

  render() {
    switch(this.state.currForm) {
      case("EmailForm"):
        return(<EmailForm 
                toggleForm={this.toggleForm}
                checkRegistered={this.props.checkRegistered}
                pendingUser={this.state.pendingUser}
              />);
      case("LoginForm"):
        return(<LoginForm 
                toggleForm={this.toggleForm}
                pendingUser={this.state.pendingUser}
                loginUser={this.props.loginUser}
                close={this.props.close}
              />);
      case("SignupForm"):
        return(<SignupForm 
                toggleForm={this.toggleForm}
                pendingUser={this.state.pendingUser}
              />);
      case("SignupForm2"):
        return(<SignupForm2 
                toggleForm={this.toggleForm}
                pendingUser={this.state.pendingUser}
                signupUser={this.props.signupUser}
                close={this.props.close}
              />);
    }
  }
}

export default SessionForm;