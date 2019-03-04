import { connect } from "react-redux";
import * as UiActions from "../../actions/ui_actions";
import Stream from "./stream"

const mDTP = (dispatch) => {
  return({
    openModal: () => {dispatch(UiActions.openModal("session"))},
  })
}

export default connect(null, mDTP)(Stream);