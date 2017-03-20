import React from 'react';
import { withRouter } from 'react-router';
import RoomIndexItem from './room_index_item';

class RoomIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRooms(2);
  }

  render() {
    const rooms = this.props.rooms
    return (
      <div className="room-index-body"> 
        <h1 className="room-index-header">Featured Rooms:</h1>
        <ul className="featured-rooms-list">
          {rooms.map((room) => (
            <li className="featured-room" key={room.id}>
              <RoomIndexItem room={room} key={room.id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


export default RoomIndex;