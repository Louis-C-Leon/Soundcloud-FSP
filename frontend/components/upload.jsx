import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      coverArt: null,
      genre: null,
      errors: [],
      redirect: null,
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
    this.setState({songs: files});
  }

  getCover(e) {
    const files = e.target.files;
    this.setState({coverArt: files[0]});
  }

  getGenre(e) {
    this.setState({genre: e.target.value})

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.songs[0].name );
    formData.append('song[user_id]', this.props.artist_id );
    formData.append('song[release_date]', Date(this.state.songs[0].lastModified));
    formData.append('song[genre]', this.state.genre);
    formData.append('song[image]', this.state.coverArt);
    formData.append('song[song_file]', this.state.songs[0]);
    this.props.createSong(formData);
    this.setState({redirect: "/you/library"})
  }

  render() {
    if(this.props.artist_id === null) {
      this.setState({redirect: "/"});
      this.props.openModal();
    }
    return(
      <>
      {this.redirect()}
        <form className="uploadForm"
        onSubmit={this.handleSubmit}>
          <div>Upload a song and album cover</div>
          <label> Song
            <input type="file" 
            className="uploadButton" 
            onChange={this.getSongs}
            />
          </label>
          <label> Cover
            <input type="file" 
            className="uploadButton" 
            onChange={this.getCover}
            />
          </label>
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
      </>
    );
  }
}

export default UploadForm;