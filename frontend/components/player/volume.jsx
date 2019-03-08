
import React from 'react';

class VolumeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeBar: "volumeBarHide",
      trackerClass: "trackerHidden",
      scrubber: "volumeBarHide",
      status: "playing",
      volStyle: {height: "100%"},
      barStyle: {height: "0%"}
    }
  }

  render(){
  
    const bar = document.getElementById("volUiHelper")
    let bottom;
    let height;

    if (bar === null) {
      bottom = 0;
      height = 0;
    } else {
      bottom = bar.getBoundingClientRect().bottom;
      height = bar.getBoundingClientRect().height;
    }

    return(
      <div className="volumeControls">

        <img className="playerButton" src={window.images.volume} 
          onMouseEnter={() => {this.setState({volumeBar: "volumeBarShow", scrubber: "volumeScrubber"});
            this.props.overflow()}}
            onMouseLeave={() => {this.setState({volumeBar: "volumeBarHide", scrubber: "volumeBarHide"})}}/>
        
        <div className={`${this.state.volumeBar} volumeBar`} 
          onMouseOver={() => {this.setState({volumeBar: "volumeBarShow", scrubber: "volumeScrubber"})}}
          onMouseLeave={() => {this.setState({volumeBar: "volumeBarHide", scrubber: "volumeBarHide"})}}>
          
          <div id="volUiHelper" className={this.state.scrubber} onMouseMove={(e) => {
              if(this.state.status === "seeking") {
                const newVol = ((bottom - e.clientY) / (height))
                this.props.setVol(newVol);
                const barHeight = newVol * 100;
                const remaining = 100 - barHeight;
                this.setState({volStyle: {height: `${barHeight}%`}, barStyle: {height: `${remaining}%`}})
              }
            }}
            onMouseDown = {(e) => {
              this.setState({status: "seeking"})
              const barHeight = ((bottom - e.clientY) / (height)) * 100;
              const remaining = 100 - barHeight;
              this.setState({volStyle: {height: `${barHeight}%`}, barStyle: {height: `${remaining}%`}})}}
            onMouseUp = {(e) => {
              const newVol = ((bottom - e.clientY) / (height))
              this.props.setVol(newVol);
              this.setState({status: "playing"})
            }}
            onMouseEnter={() => this.setState({trackerClass: "trackerVisible"})} 
            onMouseLeave={() => {
              this.setState({trackerClass: "trackerHidden"})
              this.setState({status: "playing"})}}>

            <div className="remainingVolume" style={this.state.barStyle}/>
            <div className={this.state.trackerClass} />
            <div className="selectedVolume" style={this.state.volStyle}/>             

          </div>
        </div>    
      </div>
    );
  }
}

export default VolumeControl;