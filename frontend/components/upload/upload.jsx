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
      photoUrl: null,
    };
    this.receiveSong = this.receiveSong.bind(this);
    this.renderDetailForm = this.renderDetailForm.bind(this);
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

  renderDetailForm() {
    if (this.state.song === null) {
      return null;
    } else {
      return (
        <UploadDetails
          song={this.state.song}
          coverArt={this.state.coverArt}
          title={this.state.song.name}
          createSong={(song) => {return(this.props.createSong(song))}}
          userId={this.props.userId} />
      );
    }
  }

  render() {
    if(this.props.userId === null) {
      this.props.openModal();
      return(<Redirect to="/" />)
    }
    return(
      <div className="uploadContainer">
        <form className="uploadForm"
          onSubmit={(e) => {e.preventDefault()}}>
            <div className="songSelectButton" onClick={() => {
              document.getElementById("songUploadButton").click()}}>
              choose files to upload

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