import React from 'react';
import EmailForm from './email_form'

class SessionForm extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.currentForm === null) {
      return(<EmailForm switchLoginForm={this.props.switchLoginForm}/>)
    } else {
      const NewForm = this.props.currentForm;
      return(<NewForm switchLoginForm={this.props.switchLoginForm}/>);
    }
  }
}

export default SessionForm;