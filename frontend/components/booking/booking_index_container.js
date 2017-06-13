import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings, fetchBooking, deleteBooking } from '../../actions/booking_actions';


const mapStateToProps = (state) => {
  return {
    bookings: state.bookings.bookings,
    errors: state.bookings.errors
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBooking: id => dispatch(fetchBooking(id)),
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
