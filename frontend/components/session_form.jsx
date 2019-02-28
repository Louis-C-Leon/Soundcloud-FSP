import React from 'react';
import EmailForm from './email_form'

class SessionForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
      currentForm: <EmailForm />,
    }
  }

  render() {
    return(this.state["currentForm"]);
  }
}

export default SessionForm;