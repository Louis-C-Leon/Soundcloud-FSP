import { connect } from 'react-redux';
import NavBar from './nav_bar'
import { withRouter } from "react-router-dom"

const mSTP = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
  })
}

export default withRouter(connect(mSTP)(NavBar))