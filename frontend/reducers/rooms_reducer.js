import {merge} from 'lodash';
import {RECEIVE_ROOMS, RECEIVE_ROOM} from '../actions/room_actions';

const roomsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ROOMS:

      return merge({}, state, action.rooms);
      
    case RECEIVE_ROOM:
      const newRoom = {[action.room.id]: action.room};
      return merge({}, state, newRoom);
    default: 
      return state;
  }
};

export default roomsReducer;