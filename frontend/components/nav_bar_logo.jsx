import React from 'react';
import { ProtecedRoute, AuthRoute } from "../util/route_util";

const NavBarLogo = () => {
  return(

      <div className="mainLogo">
        <img className="cloudLogo" src={window.images.tempLogo} />
      </div>

  );
}

export default NavBarLogo;