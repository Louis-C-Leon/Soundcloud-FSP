import React from 'react';
import { Redirect } from 'react-router-dom';
import UploadDetails from "./upload_detail";

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song: null,
      coverArt: window.images.defaultSong,
      errors: [],
      redirect: null,
      photoUrl: null,
    };
    this.requestSong = this.requestSong.bind(this);
    this.receiveSong = this.receiveSong.bind(this);
    this.renderDetailForm = this.renderDetailForm.bind(this);
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

  receiveSong(e) {
    const files = e.target.files;
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({song: files[0]})
    }

    if(files) {
      reader.readAsDataURL(files[0]);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  requestSong() {
    const button = document.getElementById("songUploadButton");
    button.click();
  }

  renderDetailForm() {
    if (this.state.song === null) {
      return null;
    } else {
      return (
        <UploadDetails
        redirect={this.redirect}
        song={this.state.song}
        coverArt={this.state.coverArt}
        title={this.state.song.name}
        createSong={(song) => {
          this.props.createSong(song).then(() => {this.setState({redirect: "/users/you"})})}}
        cancel={() => this.setState({redirect: "/"})}
        userId={this.props.userId}/>
      );
    }
  }

  render() {
    if(this.props.userId === null) {
      this.setState({redirect: "/"});
      this.props.openModal();
    }
    return(
      <div className="uploadContainer">
      {this.redirect()}
        <form className="uploadForm"
          onSubmit={this.handleSubmit}>
            <div className="songSelectButton"
              onClick={this.requestSong}>choose files to upload
              <input type="file"
                accept="audio/*"
                id="songUploadButton"
                className="fileUploadButton" 
                onChange={this.receiveSong}/>
            </div>
        </form>
        {this.renderDetailForm()}
      </div>
    );
  }
}

export default UploadForm;