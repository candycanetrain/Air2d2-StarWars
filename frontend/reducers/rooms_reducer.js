import {merge} from 'lodash';
import {RECEIVE_ROOMS, RECEIVE_ROOM} from '../actions/room_actions';

const roomsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ROOMS:
      return action.rooms;
    default: 
      return state;
  }
};

export default roomsReducer;