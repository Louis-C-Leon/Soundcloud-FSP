import React from "react";

class SongShowGraphic extends React.Component {

  constructor(props) {
    super(props)
    let songData = new Array();
    for (let i = 0; i < 200; i++) {
      songData.push(Math.random() * 50 + 50);
    };
    this.animate = this.animate.bind(this);
    this.state = {
      status: "playing",
      newTime: 0,
      songData,
      playing: true,
      focused: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    const playing = props.song.id === props.currSong;
    return { playing}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.song !== this.props.song) {
      let songData = new Array();
      for (let i = 0; i < 200; i++) {
        songData.push(Math.random() * 50 + 50);
      };
      this.setState({songData})
    }
  }

  animate() {
    const canvas = document.getElementById("songShowGraphic")
    const context = canvas.getContext("2d");
    const audio = document.getElementById("playerAudio");
    const data = this.state.songData
    const newTime = this.state.newTime
    const status = this.state.status;
    const playing = this.state.playing;
    const draw =  function() {
      requestAnimationFrame(draw);
      context.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width / data.length
      if (!playing) {
        for (let i = 0; i < data.length; i++) {
          const startX = width * i
          const mainHeight = canvas.height / (200 / data[i]);
          const reflectionHeight = mainHeight / 2.5
          const mainStartY = (canvas.height * 2 / 3) - mainHeight;
          const reflectionStartY = mainStartY + mainHeight + 1;
          context.fillStyle = "rgb(200, 200, 200)";
          context.fillRect(startX, mainStartY, width - 1, mainHeight);
          context.fillStyle = "rgb(165, 165, 165)";
          context.fillRect(startX, reflectionStartY, width - 1, reflectionHeight);
        }
      } else if (status === "playing") {
        for (let i = 0; i < data.length; i++) {
          const orange = isNaN(audio.duration) || (audio.currentTime / audio.duration) < (i / data.length);
          const startX = width * i
          const mainHeight = canvas.height / (200 / data[i]);
          const reflectionHeight = mainHeight / 2.5
          const mainStartY = (canvas.height * 2 / 3) - mainHeight;
          const reflectionStartY = mainStartY + mainHeight + 1;
          if (orange) {
            context.fillStyle = "rgb(200, 200, 200)";
          } else {
            context.fillStyle = "rgb(255, 69, 0)"
          }
          context.fillRect(startX, mainStartY, width - 1, mainHeight);
          if (orange) {
            context.fillStyle = "rgb(165, 165, 165)";
          } else {
            context.fillStyle = "rgb(200, 60, 40)"
          }
          context.fillRect(startX, reflectionStartY, width - 1, reflectionHeight);
        }
      } else if (status === "seeking") {
        for (let i = 0; i < data.length; i++) {
          const orange = isNaN(audio.duration) || (newTime / audio.duration) < (i / data.length);
          const startX = width * i
          const mainHeight = canvas.height / (200 / data[i]);
          const reflectionHeight = mainHeight / 2.5
          const mainStartY = (canvas.height * 2 / 3) - mainHeight;
          const reflectionStartY = mainStartY + mainHeight + 1;
          if (orange) {
            context.fillStyle = "rgb(200, 200, 200)";
          } else {
            context.fillStyle = "rgb(255, 69, 0)"
          }
          context.fillRect(startX, mainStartY, width - 1, mainHeight);
          if (orange) {
            context.fillStyle = "rgb(165, 165, 165)";
          } else {
            context.fillStyle = "rgb(200, 60, 40)"
          }
          context.fillRect(startX, reflectionStartY, width - 1, reflectionHeight);
        }
      }
    }.bind(this);
    return draw;
  }

  seek(time) {
    document.getElementById("playerAudio").currentTime = time;
  }

  render() {
    const graphic = document.getElementById("songShowGraphic");
    let opacity
    if (this.state.focused) {
      opacity = {"opacity": "1"}
    } else {
      opacity = {"opacity": ".7"}
    }

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
      <canvas id="songShowGraphic" width="700px" height="100px" style={opacity}
        onMouseDown = {() => {
          if (this.state.playing) this.setState({status: "seeking"})
        }}
        onMouseUp = {(e) => {
          if (this.state.playing) {
            this.setState({status: "playing"});
            const newTime = ((e.clientX - left) / (width)) * totalTime;
            this.seek(newTime);
          }
          }}
          onMouseMove={(e) => {
            if (this.state.playing) {
              if (this.state.status === "seeking") {
                const played = ((e.clientX - left) / (width)) * 100;
                const remaining = 100 - played;
                const newTime = ((e.clientX - left) / (width)) * totalTime;
                this.setState({newTime});
                const min = Math.floor(newTime / 60);
                const sec = Math.floor(newTime % 60);
                this.setState({playedStyle: {width: `${played}%`}, remainingStyle: {width: `${remaining}%`}, elapsedString: `${min}:${`${sec}`.padStart(2,0)}`});
              } else {

              }
            }
          }}
          onMouseEnter={() => {
            this.setState({focused: true});
          }}
          onMouseLeave={() => {
            this.setState({focused: false});
          }}>
      </canvas>
    )
  }
}

export default SongShowGraphic;