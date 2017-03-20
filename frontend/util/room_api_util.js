
export const fetchRooms = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/rooms',
    data
  });
}

export const fetchRoom = id => {
  return $.ajax({
    method: 'GET',
    url: `api/rooms/${id}`
  });
}

export const createRoom = (room) => {
  return $.ajax({
    method: 'POST',
    url: `api/rooms`,
    data: {room}
  });
}