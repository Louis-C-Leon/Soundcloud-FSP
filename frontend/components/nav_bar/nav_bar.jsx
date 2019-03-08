import React from 'react';
import SessionNavBar from './session_nav_bar';
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
          <NavLink to={`/users/you`}
          className="navButton" activeClassName="activeButton">
          Library
          </NavLink>
        </div>
        <div className="searchContainer">
          <form>
            <input type="text" className="navSearch" placeholder="Search" />
          </form>
        </div>
        <SessionNavBar user={this.props.user}/>
      </div>
    );
  }
}

export default NavBar;