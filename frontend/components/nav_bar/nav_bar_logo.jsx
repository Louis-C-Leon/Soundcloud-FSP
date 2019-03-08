import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLogo = () => {
  return(
      <>
      <Link to="/discover" id="homeLink" />
      <div className="mainLogo" onClick={() => {
        const link = document.getElementById("homeLink");
        link.click();
      }}>
        <img className="cloudLogo" src={window.images.tempLogo} />
        SOUNDCROWD
      </div>
      </>

  );
}

export default NavBarLogo;