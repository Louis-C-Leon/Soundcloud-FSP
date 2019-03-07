
import React from 'react';

class VolumeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeBar: "volumeBarHide",
      trackerClass: "trackerHidden",
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
      bottom = bar.offsetTop;
      height = bar.offsetHeight;
    }

    return(
      <div className="volumeControls">

        <img className="playerButton" src={window.images.volume} 
          onMouseEnter={() => {this.setState({volumeBar: "volumeBarShow"});
            this.props.overflow()}}
          onMouseLeave={() => {this.setState({volumeBar: "volumeBarHide"})}}/>
        
        <div className={`${this.state.volumeBar} volumeBar`} 
          onMouseOver={() => {this.setState({volumeBar: "volumeBarShow"})}}
          onMouseLeave={() => {this.setState({volumeBar: "volumeBarHide"})}}>
          
          <div id="volUiHelper" className="volumeScrubber" onMouseMove={(e) => {
              if(this.state.status === "seeking") {
                const barHeight = ((e.clientY - bottom) / (height)) * 100;
                const remaining = 100 - barHeight;
                this.setState({volStyle: {height: `${barHeight}%`}}, {barStyle: {height: `${remaining}%`}})
              }
            }}
            onMouseDown = {() => this.setState({status: "seeking"})}
            onMouseUp = {(e) => {
              const newVol = ((e.clientY - bottom) / (height))
              this.setVol(newVol);
              console.log(newVol);
            }}
            onMouseEnter={() => this.setState({trackerClass: "trackerVisible"})} 
            onMouseLeave={() => this.setState({trackerClass: "trackerHidden"})}>

            <div className="selectedVolume" className={this.state.volStyle}/>
            <div className={this.state.trackerClass} />
            <div className="remainingVolume" className={this.state.barStyle}/>             

          </div>
        </div>    
      </div>
    );
  }
}

export default VolumeControl;