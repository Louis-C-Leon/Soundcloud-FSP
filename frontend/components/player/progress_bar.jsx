import React from 'react';

const ProgressBar = (props) => {
  const songPlayed = props.currTime / props.totalTime * 100;
  const songRemaining = 100 - songPlayed;
  const minRemaining = Math.floor(props.currTime / 60);
  const secRemaining = Math.floor(props.currTime % 60);
  const min = Math.floor(props.totalTime / 60);
  const sec = Math.floor(props.totalTime % 60);

  return(
    <>{`${minRemaining}:` + `${secRemaining}`.padStart(2, "0")}
      <div className="progressBar" onMouseDown = {() => console.log("AAAAAA")}>
        <div className="songPlayed" style={{width: songPlayed + "%"}}/>
        <div className="tracker" />
        <div className="songRemaining" style={{width: songRemaining + "%"}}/>
      </div>
      {`${min}:` + `${sec}`.padStart(2, "0")}
    </>
  )
}

export default ProgressBar;