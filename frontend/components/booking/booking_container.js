import { connect } from 'react-redux';
import { createBooking, clearErrors } from '../../actions/booking_actions';
import Booking from './booking';


const mapStateToProps = (state, {params}) => {
  const currentUser = state.session.currentUser;
  const room = state.currentRoom;
  const errors = state.bookings.errors

  return {
    currentUser,
    room,
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
