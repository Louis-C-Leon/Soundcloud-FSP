import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProtectedRoute, AuthRoute} from "../../util/route_util";
import UserSideBarContainer from "./user_sidebar_container";
import FillerSidebar from "./filler_sidebar";
import UploadFormContainer from "../upload/upload_container";
import DiscoverContainer from "./discover_container";
import UserPageContainer from "./user_page_container";
import StreamContainer from "./stream_container";
import SongShowContainer from "./song_page_container";
import LoggedOutSplash from "./logged_out_splash";

const LoggedInRedirect = () => {
  return(<Redirect to="/discover" />)
}

const Splash = () => {
  return(
    
    <>
      <ProtectedRoute component={LoggedInRedirect} />
      <div className="pageHeader">
        <Route path={"/songs/:songId"} component={SongShowContainer} />
        <AuthRoute component={LoggedOutSplash} />
      </div>
      <div className="pageBody">
        <div className="songSplash">
          <Switch>
            <Route path={"/users/:user"} component={UserPageContainer} />
            <Route path={"/stream"} component={StreamContainer} />
            <Route path={"/upload"} component={UploadFormContainer} />
            <Route path={"/"} component={DiscoverContainer} />
          </Switch> 
        </div>
        <ProtectedRoute component={UserSideBarContainer}/>
        <AuthRoute component={FillerSidebar}/>
      </div>
    </>
  );
}

export default Splash;