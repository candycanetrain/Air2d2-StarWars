import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings, fetchBooking } from '../../actions/booking_actions';

const _initialState = {
  bookings: {
    bookings: [],
    errors: []
  }
}

const mapStateToProps = (state = _initialState) => {
  // debugger
  return {
    bookings: state.bookings.bookings,
    errors: state.bookings.errors
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBooking: id => dispatch(fetchBooking(id)),
  fetchBookings: () => dispatch(fetchBookings()) 
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
