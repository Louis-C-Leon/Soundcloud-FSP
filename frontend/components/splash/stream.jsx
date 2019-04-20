import React from "react";
import SongContainer from "./song_container";

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {songList: this.sortByReleaseDate(this.props.songs)}
  }

  componentDidMount() {
    this.props.getAllSongs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.songs !== prevProps.songs) {
      console.log("re - sorting")
      this.setState({songList: this.sortByReleaseDate(this.props.songs)})
    }
  }

  sortByReleaseDate(songHash) {
    let songList = Object.values(songHash);
    let currDate;
    let nextDate;
    let temp;
    for (let i = 0; i < songList.length ; i++) {
      for (let j = 0; j < songList.length - i - 1; j++) {
        console.log("sorting")
        currDate = new Date(songList[j].release_date);
        nextDate = new Date(songList[j + 1].release_date);
        if (currDate < nextDate) {
          temp = Object.assign({}, songList[j]);
          songList[j] = Object.assign({}, songList[j + 1]);
          songList[j + 1] = temp;
        }
      }
    }
    return songList;
  }

  render() {
    return(
      <>
        <div className="discoverHeader">Browse the Newest Tracks on SoundCrowd</div>
        <div className="streamSongs">
          {Object.values(this.state.songList).map( (curr_song) => {
            return(<div className="songContainer" key={`streamSong#${curr_song.id}`}>
                  <SongContainer key={curr_song.id} 
                      song={curr_song} />
                  </div>)
          })}
        </div>
      </>
    );
  }

}

export default Stream;