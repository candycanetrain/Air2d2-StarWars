import {merge} from 'lodash';
import {RECEIVE_ROOM} from '../actions/room_actions';

const currentRoomReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type){
    case RECEIVE_ROOM:
      return action.room;
    default: 
      return state;
  }
};

export default currentRoomReducer;