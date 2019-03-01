import React from 'react'

class NavBar extends React.Component {
  render() {
    return(
      <div className="navBarMain">
        <div class="logoContainer">
          <div className="mainLogo"></div>
        </div>
        <div className="mainButtons">
          <div className="navButton">Home</div>
          <div className="navButton">Stream</div>
          <div className="navButton">Library</div>
        </div>
        <div className="searchContainer">
          <input type="text" className="navSearch" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default NavBar;