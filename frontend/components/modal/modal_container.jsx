import { closeModal } from "../../actions/ui_actions";
import { connect } from "react-redux";
import Modal from "./modal";

const mSTP = (state, ownProps) => {
  return({
    modal: state.ui.modal,
  })
}

const mDTP = (dispatch, ownProps) => {
  return({
    closeModal: () => dispatch(closeModal()),
  })
}

export default connect(mSTP, mDTP)(Modal);