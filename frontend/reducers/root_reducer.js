import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import roomsReducer from './rooms_reducer';
import currentRoomReducer from './current_room_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  rooms: roomsReducer,
  currentRoom: currentRoomReducer
});

export default rootReducer;