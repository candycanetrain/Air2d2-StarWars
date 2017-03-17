import React from 'react';
import { withRouter } from 'react-router';
import RoomIndexItem from './room_index_item';

class RoomIndex extends React.Component {
  componentDidMount() {

  }

  render() {
    const rooms = this.props.rooms
    return (
      <div className="room-index-body"> 
        <h1 className="room-index-header">Rooms:</h1>
        <div className="rooms">
          {rooms.map((room) => 
            <RoomIndexItem room={room} key={room.id}/>
          )}
        </div>
      </div>
    )
  }
}


export default RoomIndex;