import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import roomsReducer from './rooms_reducer';
import currentRoomReducer from './current_room_reducer';
import bookingReducer from './booking_reducer';
import reviewReducer from './review_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  rooms: roomsReducer,
  currentRoom: currentRoomReducer,
  bookings: bookingReducer,
  reviews: reviewReducer
});

export default rootReducer;