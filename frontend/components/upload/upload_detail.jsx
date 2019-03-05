import React from "react";

class UploadDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <form className="uploadDetails" onSubmit={this.handleSubmit}>
        <img src={this.props.coverArt} />
        <input type="file" />
        <label>Title
          <input type="text" placeholder="Name your song." />
        </label>
        <label>Genre
          <select name="genre">
            <option value="indie/alternative">indie/alternative</option>
            <option value="indie/alternative">indie/alternative</option>
            <option value="indie/alternative">indie/alternative</option>
            <option value="indie/alternative">indie/alternative</option>
            <option value="indie/alternative">indie/alternative</option>
            <option value="indie/alternative">indie/alternative</option>
            <option value="indie/alternative">indie/alternative</option>
          </select>
        </label>
        <label>Description 
          <textarea placeholder="Describe your song" />
        </label>
        <div className="uploadCancelButton">Cancel</div>
        <div className="uploadSubmitButton">Save</div>
      </form>
    )
  }
}

export default UploadDetails