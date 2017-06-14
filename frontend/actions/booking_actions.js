import * as BookingUtil from '../util/booking_api_util';
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const UPDATE_BOOKING = "UPDATE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
import {hashHistory} from 'react-router';

export const fetchBookings = () => dispatch => {
 return(
  BookingUtil.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
)};

export const fetchBooking = (id) => dispatch => (
  BookingUtil.fetchBooking(id)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = booking => dispatch => (
  BookingUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
    err => dispatch(receiveBookingErrors(err.responseJSON)))
);

export const deleteBooking = (id) => dispatch => (
  BookingUtil.deleteBooking(id)
    .then(booking => dispatch(removeBooking(booking)))
);

export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = (booking) =>  ({
  type: RECEIVE_BOOKING,
  booking
});

export const removeBooking = (booking) => ({
  type: DELETE_BOOKING,
  booking
});

export const updateBooking = (booking) => ({
   type: UPDATE_BOOKING,
   booking
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

