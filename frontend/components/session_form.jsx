import React from 'react';
import EmailForm from './email_form'

class SessionForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentForm: <EmailForm 
      checkRegistered={this.props.checkRegistered}
      changeForm={this.changeForm}
      />,
    };
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(form) {
    this.setState( {currentForm: form} )
  }

  render() {
    return(this.state["currentForm"]);
  }
}

export default SessionForm;