import * as RoomUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";

export const fetchRooms = filters => dispatch => {
  return(
  RoomUtil.fetchRooms(filters)
    .then(rooms => dispatch(receiveRooms(rooms)))
)};

export const fetchRoom = (id) => dispatch => (
  RoomUtil.fetchRoom(id)
    .then(room => dispatch(receiveRoom(room)))
);

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});

