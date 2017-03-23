import {merge} from 'lodash';
import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';

const _nullErrors = Object.freeze({
  bookings: [],
  errors: []
});

const bookingReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, state, {bookings: action.bookings});
    case RECEIVE_BOOKING: 
      let newState =  merge({}, state, {[action.booking.id]: action.booking});
      newState.errors = [];
      return newState;
    case RECEIVE_BOOKING_ERRORS:
      const errors = action.errors;
      let anotherState = merge({},state);
      anotherState.errors = action.errors;
      return anotherState;
    default: 
      return state;    
  }
};






export default bookingReducer;