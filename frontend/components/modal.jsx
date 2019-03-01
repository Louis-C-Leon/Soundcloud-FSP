import React from "react";
import SessionFormContainer from "./session/session_form_container";

const Modal = (props) => {
  if(props.modal === null) {
    return null;
  }
  let Component;
  switch(props.modal) {
    case "session":
      Component = SessionFormContainer;
  }
  return(
    <div className="modalContainer" onClick={props.closeModal}>
      <div className="modalChild" onClick={(e) => {e.stopPropagation()}}>
        <Component />
      </div>
    </div>
  ); 
}

export default Modal;
