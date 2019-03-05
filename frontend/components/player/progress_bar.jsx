import React from 'react';

const ProgressBar = (props) => {
  return(
    <div>{props.currTime}/{props.duration}</div>
  )
}

export default ProgressBar;