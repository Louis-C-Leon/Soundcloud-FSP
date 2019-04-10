import React from "react";
import { Link } from "react-router-dom"

class UploadDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      song: this.props.song,
      coverArt: null,
      title: this.props.title,
      genre: "other",
      description: "",
      coverUrl: this.props.coverArt,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestArtwork = this.requestArtwork.bind(this);
    this.receiveArtwork = this.receiveArtwork.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    formData.append('song[song_file]', this.state.song);
    if(this.state.description !== "") {
      formData.append('song[description]', this.state.description);
    } 
    formData.append('song[genre]', this.state.genre);
    formData.append('song[release_date]', "01/01/01");
    formData.append('song[user_id]', this.props.userId);
    if(this.state.coverArt !== null) {
      formData.append('song[image]', this.state.coverArt);
    }
    this.props.createSong(formData).then( () => {
      document.getElementById("uploadDetailLink").click();
    });
  }

  
  
  receiveArtwork(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({coverArt: file, coverUrl: reader.result});
    }

    if(file) {
      reader.readAsDataURL(file);
    }
  }

  requestArtwork(e) {
    const button = document.getElementById("coverUploadButton");
    button.click();
  }

  updateField(name) {
    
    return(
      (e) => {
        this.setState({[name]: e.target.value})
      }
    )
  }

  render() {
    return(
      <form className="uploadDetails" onSubmit={this.handleSubmit}>
        <Link to="/users/you" className="hiddenLink" id="uploadDetailLink" />
        <img className= "uploadArtwork" onClick={this.requestArtwork} 
            src={this.state.coverUrl}/>
        <input type="file" 
          onChange={this.receiveArtwork}
          accept="image/*" 
          className="fileUploadButton"
          id="coverUploadButton"/>
          <div style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap"
          }}>
        <label className="uploadDetailInput">Title
          <input type="text" 
          placeholder="Name your song." 
          onChange= {this.updateField('title')}
          value={this.state.title} style={{
            height: "20px",
            margin: "5px",
            width: "300px",
            borderRadius: "3px",
            border: "1px solid rgb(150, 150, 150)"
          }}/>
        </label>
        <label className="uploadDetailInput">Genre
          <select name="genre" value={this.state.genre}
              onChange={this.updateField('genre')} style={{
                appearance: "none",
                width: "300px",
              }}>
            <option value="other">other</option>
            <option value="indie/alternative">indie/alternative</option>
            <option value="pop">indie/alternative</option>
            <option value="rock/metal">rock/metal</option>
            <option value="hip-hop">hip-hop</option>
            <option value="jazz">jazz</option>
            <option value="electronic">electronic</option>
          </select>
        </label>
        <label className="uploadDetailInput">Description 
          <textarea placeholder="Describe your song" 
            onChange={this.updateField('description')} style={{
              height: "60px",
              width: "300px",
            }} style={{borderRadius: "3px", border: "1px solid rgb(150, 150, 150"}}/>
        </label>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <div className="uploadDetailButton cancelButton" onClick={this.props.cancel}>Cancel</div>
        <div className="uploadDetailButton saveButton" onClick={this.handleSubmit}>Save</div>
        </div>
        </div>
      </form>
    );
  }
}

export default UploadDetails