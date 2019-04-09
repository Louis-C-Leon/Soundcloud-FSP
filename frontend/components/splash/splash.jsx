import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProtectedRoute, AuthRoute} from "../../util/route_util";
import UserSideBarContainer from "./user_sidebar_container";
import FillerSidebar from "./filler_sidebar";
import UploadFormContainer from "../upload/upload_container";
import DiscoverContainer from "./discover_container";
import UserPageContainer from "./user_page_container";
import StreamContainer from "./stream_container";

const Splash = () => {
  return(
    <div className="songSplash">
      <ProtectedRoute component={UserSideBarContainer}/>
      <AuthRoute component={FillerSidebar}/>
      <Switch>
        <Route path={"/discover"} render={() => {return(<DiscoverContainer />)}} />
        <Route path={"/users/:user"} render={() => {return(<UserPageContainer />)}} />
        <Route path={"/stream"} render={() => {return(<StreamContainer />)}} />
        <Route path={"/upload"} render={() => {return(<UploadFormContainer />)}} />
        <Route path={"/songs/:songId"} render={() => <h1>SONG PAGE</h1>} />
      </Switch>
    </div>
  );
}

export default Splash;