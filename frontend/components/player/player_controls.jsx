import React from 'react';

const PlayerControls = (props) => {
  return(
    <div onClick={props.togglePlay}>Play/Pause</div>
  )
}

export default PlayerControls;