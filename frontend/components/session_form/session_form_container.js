import { connect } from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup, receiveErrors} from '../../actions/session_actions';

const mapStateToProps = ({session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, {location}) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  clearErrors: errors => dispatch(receiveErrors(errors))
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);