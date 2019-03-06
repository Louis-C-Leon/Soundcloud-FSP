import React from 'react';


class ProgressBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const songPlayed = this.props.currTime / this.props.totalTime * 100;
    const songRemaining = 100 - songPlayed;
    const minRemaining = Math.floor(this.props.currTime / 60);
    const secRemaining = Math.floor(this.props.currTime % 60);
    const min = Math.floor(this.props.totalTime / 60);
    const sec = Math.floor(this.props.totalTime % 60);

    return(
      <>{`${minRemaining}:` + `${secRemaining}`.padStart(2, "0")}
        <div className="progressBar" >
          <div className="songPlayed" style={{width: songPlayed + "%"}}/>
          <div className="tracker" />
          <div className="songRemaining" style={{width: songRemaining + "%"}}/>
        </div>
        {`${min}:` + `${sec}`.padStart(2, "0")}
      </>
    )
  }
}

export default ProgressBar;