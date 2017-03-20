export const selectRoom = ({rooms}, id) => {
  const room = rooms[id] || {};
  return room
}

export const asArray = ({ rooms }) => Object.keys(rooms).map(key => rooms[key])