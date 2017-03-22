import {merge} from 'lodash';
import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';

const _nullErrors = Object.freeze({
  errors: []
});

const bookingReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, state, action.bookings);
    case RECEIVE_BOOKING: 
      return merge({}, state, {[action.booking.id]: action.booking});
    case RECEIVE_BOOKING_ERRORS:
      const errors = action.errors;
      return merge({}, _nullErrors, {errors});
    default: 
      return state;    
  }
};






export default bookingReducer;