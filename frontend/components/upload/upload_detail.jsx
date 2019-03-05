import React from "react";

class UploadDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      song: this.props.song,
      coverArt: null,
      title: this.props.title,
      genre: "",
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
      formData.append('song[descriptiion]', this.state.description);
    } 
    formData.append('song[genre]', this.state.genre);
    formData.append('song[release_date]', "01/01/01");
    formData.append('song[user_id]', this.props.userId);
    this.props.createSong(formData)
    .then(() => {console.log(this.state)});
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
        console.log(e.target.value);
        console.log(this.state);
      }
    )
  }

  render() {
    return(
      <form className="uploadDetails" onSubmit={this.handleSubmit}>
        <img onClick={this.requestArtwork} 
            src={this.state.coverUrl}/>
        <input type="file" 
          onChange={this.receiveArtwork}
          accept="image/*" 
          className="fileUploadButton"
          id="coverUploadButton"/>
        <label>Title
          <input type="text" 
          placeholder="Name your song." 
          onChange= {this.updateField('title')}
          value={this.state.title}/>
        </label>
        <label>Genre
          <select name="genre" value={this.state.genre}
              onChange={this.updateField('genre')}>
            <option value="indie/alternative">indie/alternative</option>
            <option value="pop">indie/alternative</option>
            <option value="rock/metal">rock/metal</option>
            <option value="hip-hop">hip-hop</option>
            <option value="jazz">jazz</option>
            <option value="electronic">electronic</option>
            <option value="other">other</option>
          </select>
        </label>
        <label>Description 
          <textarea placeholder="Describe your song" onChange={this.updateField('description')}/>
        </label>
        <div className="uploadCancelButton">Cancel</div>
        <div className="uploadSubmitButton" onClick={this.handleSubmit}>Save</div>
      </form>
    )
  }
}

export default UploadDetails