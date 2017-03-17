import React from 'react';

class RoomIndexItem extends React.Component {

  render() {
    const room = this.props.room
    return(
      <div>
        
        <h1>{room.name}</h1>
        <div>{room.city}</div>    
      </div>
      
    )
  }

}

export default RoomIndexItem;