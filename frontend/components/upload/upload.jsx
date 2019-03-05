import React from 'react';
import { Redirect } from 'react-router-dom';
import UploadDetails from "./upload_detail";

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song: null,
      coverArt: window.defaultSong,
      genre: null,
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
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({song: files[0]})
    }

    if(files) {
      fileReader.readAsDataURL(files[0]);
    }
  }

  // getCover(e) {
  //   const file = e.target.files[0];
  //   const fileReader = new FileReader();

  //   fileReader.onloadend = () => {
  //     this.setState({coverArt: file, photoUrl: fileReader.result });
  //   }
  //   if(file) {
  //     fileReader.readAsDataURL(file);
  //   }
  //   console.log(fileReader);
  //   console.log(this.state);
  // }

  handleSubmit(e) {
    e.preventDefault();
  }

  requestSong() {
    const button = document.getElementById("file_upload_button");
    button.click();
  }

  renderDetailForm() {
    if (this.state.song === null) {
      return null;
    } else {
      return <UploadDetails />;
    }
  }

  render() {
    if(this.props.artist_id === null) {
      this.setState({redirect: "/"});
      this.props.openModal();
    }
    return(
      <div className="uploadContainer">
      {this.redirect()}
        <form className="uploadForm"
          onSubmit={this.handleSubmit}>
            <div onClick={this.requestSong}>choose files to upload
              <input type="file"
                accept="audio/*"
                id="file_upload_button"
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