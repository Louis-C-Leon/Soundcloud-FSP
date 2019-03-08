import UserSidebar from "./user_sidebar";
import * as UserActions from "../../actions/user_actions";
import { connect } from "react-redux";

const mSTP = (state) => {
  return({
    users: state.entities.users,
  })
}

const mDTP = (dispatch) => {
  return ({
    getUsers: () => dispatch(UserActions.getUsers())
  })
}

export default connect(mSTP, mDTP)(UserSidebar);