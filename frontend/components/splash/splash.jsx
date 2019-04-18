import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
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
  setTimeout(100, () => {
    const DiscoverRedirect = () => <Redirect to="/discover" />
    return(<ProtectedRoute path="/" exact component={DiscoverRedirect} />);
  });
}

const mSTP = (state) => {
  return({
    player: state.ui.playingSong !== null,
  })
}

const Splash = (props) => {
  let style = {};
  if (props.player) {
    style= {"paddingBottom": "50px"}
  }
  return(
    <>
      {LoggedInRedirect()}
      <div className="pageHeader">
        <Route path={"/songs/:songId"} component={SongShowContainer} />
        <AuthRoute component={LoggedOutSplash} />
      </div>
      <div className="pageBody" style={style}>
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

const ConnectedSplash = withRouter(connect(mSTP)(Splash));


export default ConnectedSplash;