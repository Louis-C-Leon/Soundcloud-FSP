import React from "react";
import { Redirect } from "react-router-dom";

const Stream = (props) => {
  props.openModal();
  return(
    <Redirect to="/discover" />
  );
}

export default Stream;