import React from "react";
import SessionFormContainer from "./session/session_form_container";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      containerClass: "modalContainerOpen",
      childClass: "modalChildOpen",
    }
    this.animateClose = this.animateClose.bind(this);
  }

  animateClose() {
    this.setState({
      containerClass: "modalContainerClose",
      childClass: "modalChildClose",
    });
  }

  render() {
    if(this.props.modal === null) {
      return null;
    }
    let Component;
    switch(this.props.modal) {
      case "session":
        Component = SessionFormContainer;
    }
    return(
      <div className={`modalContainer ${this.state.containerClass}`} onClick={() => {
        setTimeout(this.props.closeModal, 1200);
        this.animateClose();
      }}>
        <img src={window.images.xIcon} className="modalX"/>
        <div className={`modalChild ${this.state.childClass}`} onClick={(e) => {e.stopPropagation()}}>
          <Component />
        </div>
      </div>
    ); 
    }
}

export default Modal;
