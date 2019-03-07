import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProtectedRoute, AuthRoute} from "../../util/route_util";
import UserSidebar from "./user_sidebar";
import FillerSidebar from "./filler_sidebar";
import UploadFormContainer from "../upload/upload_container";
import DiscoverContainer from "./discover_container";
import LibraryContainer from "./library_container";
import StreamContainer from "./stream_container";

const Splash = () => {
  return(
    <div>
      {/* <ProtectedRoute component={UserSidebar}/>
      <AuthRoute component={FillerSidebar}/> */}
      <Switch>
        <Route path={"/discover"} render={() => {return(<DiscoverContainer />)}} />
        <Route path={"/you/Library"} render={() => {return(<LibraryContainer />)}} />
        <Route path={"/stream"} render={() => {return(<StreamContainer />)}} />
        <Route path={"/upload"} render={() => {return(<UploadFormContainer />)}} />
      </Switch>
    </div>
  );
}

export default Splash;