import React from 'react';
import SessionNavBar from './session/session_nav_bar';
import NavBarLogo from './nav_bar_logo';
import  { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return(
      <div className="navBarMain">
        <NavBarLogo />
        <div className="mainButtons">
          <NavLink to={`/discover`}
          className="navButton" activeClassName="activeButton">
          Home
          </NavLink>
          <NavLink to={`/stream`}
          className="navButton" activeClassName="activeButton">
          Stream
          </NavLink>
          <NavLink to={`/you/library`}
          className="navButton" activeClassName="activeButton">
          Library
          </NavLink>
        </div>
        <div className="searchContainer">
          <input type="text" className="navSearch" placeholder="Search" />
        </div>
        <SessionNavBar />
      </div>
    );
  }
}

export default NavBar;