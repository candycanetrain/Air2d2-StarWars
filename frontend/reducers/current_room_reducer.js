import {merge} from 'lodash';
import {RECEIVE_ROOM} from '../actions/room_actions';

const currentRoomReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ROOM:
      const newRoom = {[action.room.id]: action.room};
      return merge({}, state, newRoom);
    default: 
      return state;
  }
};

export default currentRoomReducer;