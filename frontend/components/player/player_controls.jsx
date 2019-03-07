import React from 'react';

const PlayerControls = (props) => {
  let mainButt;
  if(props.playing === true) {
    mainButt = window.images.pause;
  } else {
    mainButt = window.images.play;
  }
  return(
    <div className="playerControls" >
      <img className="playerButton" id="prevButton" src={window.images.next} onClick={props.prev}/>
      <img className="playerButton" id="playbutton" src={mainButt} onClick={props.togglePlay}/>
      <img className="playerButton" id="nextButton" src={window.images.next} onClick={props.next}/>
      <img className="playerButton" id="shuffleButton" src={window.images.shuffle} />
      <img className="playerButton" id="loopButton" src={window.images.loop} />
    </div>
  )
}

export default PlayerControls;