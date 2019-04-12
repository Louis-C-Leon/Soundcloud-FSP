import React from "react";

class SongShowGraphic extends React.Component {

  constructor(props) {
    super(props)
    let songData = new Array();
    for (let i = 0; i < 100; i++) {
      songData.push(Math.random() * 100);
    };
    this.songData = songData;
    this.animate = this.animate.bind(this);
    this.state = {
      status: "playing",
      newTime: 0,
    }
  }

  animate() {
    const canvas = document.getElementById("songShowGraphic")
    const context = canvas.getContext("2d");
    const audio = document.getElementById("playerAudio");
    const data = this.songData
    const newTime = this.state.newTime
    const status = this.state.status;
    const draw =  function() {
      requestAnimationFrame(draw);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "rgba(255, 255, 255, .5)"
      if (status === "playing") {
        for (let i = 0; i < data.length; i++) {
          if (isNaN(audio.duration) || (audio.currentTime / audio.duration) < (i / data.length)) {
            context.fillStyle = "rgba(255, 255, 255, .5)";
          } else {
            context.fillStyle = "orangered"
          }
          const width = canvas.width / data.length
          const startX = width * i
          const height = canvas.height / (100 / data[i]);
          const startY = canvas.height - height;
          context.fillRect(startX, startY, width - 1, height)
        }
      } else if (status === "seeking") {
        for (let i = 0; i < data.length; i++) {
          if (isNaN(audio.duration) || (newTime / audio.duration) < (i / data.length)) {
            context.fillStyle = "rgba(255, 255, 255, .5)";
          } else {
            context.fillStyle = "orangered"
          }
          const width = canvas.width / data.length
          const startX = width * i
          const height = canvas.height / (100 / data[i]);
          const startY = canvas.height - height;
          context.fillRect(startX, startY, width - 1, height)
        }
      }
    }
    return draw.bind(this);
  }

  seek(time) {
    document.getElementById("playerAudio").currentTime = time;
  }

  render() {
    const graphic = document.getElementById("songShowGraphic");

    let left;
    let width;

    if (graphic === null) {
      left = 0;
      width = 0;
    } else {
      left = graphic.offsetLeft;
      width = graphic.offsetWidth;
    }

    let totalTime = document.getElementById("playerAudio").duration;

    if (document.getElementById("songShowGraphic")) {
      let draw = this.animate();
      draw();
    }
    return (
      <canvas id="songShowGraphic" width="500px" height="100px"
        onMouseDown = {() => this.setState({status: "seeking"})}
        onMouseUp = {(e) => {
          this.setState({status: "playing"});
          const newTime = ((e.clientX - left) / (width)) * totalTime;
          this.seek(newTime);
          }}
          onMouseMove={(e) => {
            if(this.state.status === "seeking") {
              const played = ((e.clientX - left) / (width)) * 100;
              const remaining = 100 - played;
              const newTime = ((e.clientX - left) / (width)) * totalTime;
              this.setState({newTime});
              const min = Math.floor(newTime / 60);
              const sec = Math.floor(newTime % 60);
              this.setState({playedStyle: {width: `${played}%`}, remainingStyle: {width: `${remaining}%`}, elapsedString: `${min}:${`${sec}`.padStart(2,0)}`});
            }
          }}>
      </canvas>
    )
  }
}

export default SongShowGraphic;