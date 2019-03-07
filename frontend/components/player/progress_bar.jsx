import React from 'react';


class ProgressBar extends React.Component {

  constructor(props) {
    super(props)
    const min = Math.floor(props.totalTime / 60);
    const sec = Math.floor(props.totalTime % 60);

    this.state= {
      status: "playing",
      playedStyle: {width: "0%"},
      remainingStyle: {width: "100%"},
      totalString: `${min}:${`${sec}`.padStart(2,0)}`,
      elapsedString: "0:00",
      trackerClass: "trackerHidden"
    }

    this.seek = this.seek.bind(this);
    this.resume = this.resume.bind(this);
  }

  seek() {
    this.setState({status: "seeking"});
  }

  resume() {
    this.setState({status: "playing"})
  }

  static getDerivedStateFromProps(props, state) {
    const played = (props.currTime/props.totalTime) * 100;
    const remaining = 100 - played
    let minElapsed = Math.floor(props.currTime / 60);
    let secElapsed = Math.floor(props.currTime % 60);
    
    if (state.status === "playing") {
      return({
        playedStyle: {width: `${played}%`},
        remainingStyle: {width: `${remaining}%`},
        elapsedString: `${minElapsed}:${`${secElapsed}`.padStart(2,0)}`
      });
    } else {
      return null;
    }
  }

  seek(time) {
    this.setState({status: "playing"});
    this.props.seek(time);
  }

  render() {
    const bar = document.getElementById("help!");

    let left;
    let width;

    if (bar === null) {
      left = 0;
      width = 0;
    } else {
      left = bar.offsetLeft;
      width = bar.offsetWidth;
    }

    return(
      <div className="progressBarContainer">
      <span className="elapsedTime">{this.state.elapsedString}</span>
        <div className="progressBar" id="help!" onMouseMove={(e) => {
          if(this.state.status === "seeking") {
            const played = ((e.clientX - left) / (width)) * 100;
            const remaining = 100 - played;
            const newTime = ((e.clientX - left) / (width)) * this.props.totalTime;
            const min = Math.floor(newTime / 60);
            const sec = Math.floor(newTime % 60);
            this.setState({playedStyle: {width: `${played}%`}, remainingStyle: {width: `${remaining}%`}, elapsedString: `${min}:${`${sec}`.padStart(2,0)}`});
          }
        }} onMouseEnter={() => this.setState({trackerClass: "trackerVisible"})} onMouseLeave={() => this.setState({trackerClass: "trackerHidden"})}
        onMouseDown = {() => this.setState({status: "seeking"})}
        onMouseUp = {(e) => {
          const newTime = ((e.clientX - left) / (width)) * this.props.totalTime;
          this.seek(newTime);
        }}
        // onMouseLeave = {(e) => {
        //   let newTime = ((e.clientX - left) / (width)) * this.props.totalTime;
        //   this.seek(newTime);
        // }}
        >

          <div className="songPlayed" style={this.state.playedStyle}/>
          <div className={this.state.trackerClass} />
          <div className="songRemaining" style={this.state.remainingStyle}/>
        </div>
        {this.state.totalString}
      </div>
    )
  }
}

export default ProgressBar;