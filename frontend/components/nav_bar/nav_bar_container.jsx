import { connect } from 'react-redux';
import NavBar from './nav_bar'

const mSTP = (state, ownProps) => {
  return({
    user: state.entities.users[state.session.id],
  })
}

export default connect(mSTP)(NavBar)