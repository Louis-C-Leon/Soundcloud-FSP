import React from "react";

class SongPage extends React.Component {
  render() {
    return(
      <div>
        {Object.keys(this.props).map(val => <p1>{val}</p1>)}
      </div>
    )
  }
}

export default SongPage;