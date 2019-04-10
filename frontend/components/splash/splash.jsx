import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute, AuthRoute} from "../../util/route_util";
import UserSideBarContainer from "./user_sidebar_container";
import FillerSidebar from "./filler_sidebar";
import UploadFormContainer from "../upload/upload_container";
import DiscoverContainer from "./discover_container";
import UserPageContainer from "./user_page_container";
import StreamContainer from "./stream_container";
import SongShowContainer from "./song_page_container";

const Splash = () => {
  return(
    <div className="songSplash">
      <ProtectedRoute path={["/discover", "/stream", "/users"]} component={UserSideBarContainer}/>
      <AuthRoute path={["/discover", "/stream", "/users"]} component={FillerSidebar}/>
      <Switch>
        <Route path={"/discover"} component={DiscoverContainer} />
        <Route path={"/users/:user"} component={UserPageContainer} />
        <Route path={"/stream"} component={StreamContainer} />
        <Route path={"/upload"} component={UploadFormContainer} />
        <Route path={"/songs/:songId"} component={SongShowContainer} />
      </Switch>
    </div>
  );
}

export default Splash;