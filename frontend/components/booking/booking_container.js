import { connect } from 'react-redux';

import { createBooking } from '../../actions/booking_actions';

import Booking from './booking';

const mapStateToProps = (state, {params}) => {
  // debugger
  const currentUser = state.session.currentUser;
  const room = state.currentRoom;
  return {
    currentUser,
    room
  };
};

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
