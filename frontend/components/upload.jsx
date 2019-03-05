import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      coverArt: window.defaultSong,
      genre: null,
      errors: [],
      redirect: null,
      photoUrl: null,
    };

    this.getSongs = this.getSongs.bind(this);
    this.getGenre = this.getGenre.bind(this);
    this.getCover = this.getCover.bind(this);
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    let result;
    if (this.state.redirect===null) {
      result = null;
    } else {
      result = <Redirect to={this.state.redirect} />;
      this.setState({redirect: null});
    }
    return result;
  }

  getSongs(e) {
    const files = e.target.files;
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({songs: files})
    }
    
    if (file) {
      debugger;
    }
    console.log(fileReader);
  }

  getCover(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({coverArt: file, photoUrl: fileReader.result });
    }
    if(file) {
      fileReader.readAsDataURL(file);
    }
    console.log(fileReader);
    console.log(this.state);
  }

  getGenre(e) {
    this.setState({genre: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData;
    this.state.songs.forEach( (song) => {
      formData= new FormData();
      formData.append('song[title]', this.state.songs.name );
      formData.append('song[user_id]', this.props.artist_id );
      formData.append('song[release_date]', Date(this.state.songs[0].lastModified));
      formData.append('song[genre]', this.state.genre);
      formData.append('song[image]', this.state.coverArt);
      formData.append('song[song_file]', song);
      this.props.createSong(formData);
    } );
    this.setState({redirect: "/you/library"})
  }

  render() {
    console.log(this.state);
    if(this.props.artist_id === null) {
      this.setState({redirect: "/"});
      this.props.openModal();
    }
    return(
      <div className="uploadContainer">
      {this.redirect()}
        <form className="uploadForm"
          onSubmit={this.handleSubmit}>
          <div>Upload a song and album cover</div>
            <div>Click to Upload Song
              <input type="file"
                multiple={true}
                accept="audio/*"
                className="fileUploadButton" 
                onChange={this.getSongs}/>
            </div>
            <div> Click to Upload Art
              <input type="file"
                accept="image/*"
                ref={input => this.artInput = input}
                className="fileUploadButton" 
                onChange={this.getCover}/>
            </div>
          <select name="genre" onChange={this.getGenre}>
            <option value="alternative/indie">alternative/indie</option>
            <option value="electronic">electronic</option>
            <option value="hip-hop">hip-hop</option>
            <option value="jazz">jazz</option>
            <option value="pop">pop</option>
            <option value="rock">rock</option>
          </select>
          <div onClick={this.handleSubmit}>Click Me!</div>
        </form>
      </div>
    );
  }
}

export default UploadForm;