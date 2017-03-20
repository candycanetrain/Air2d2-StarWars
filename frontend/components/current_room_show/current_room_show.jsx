import React from 'react';
import { Link } from 'react-router';

// import RoomDetail from './room_detail';


class CurrentRoomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    const room = this.props.room
    return(
      <div>
        <ul className="current-room">
          <img src={room.img_url} alt=""/>
          <li>Name: {room.name}</li>
          <li>City: {room.city}</li>
          <li>Price: {room.price}</li>
          <li>Description: {room.description}</li>
          <li>Bedrooms: {room.bedrooms}</li>
          <li>Beds: {room.beds}</li>
          <li>Bathrooms: {room.bathrooms}</li>
          <li>Home Type: {room.homeType}</li>
          <li>Accommodates: {room.accommodates}</li>
          <li>Amenities: {room.amenities}</li>
          
        </ul>
        <br/>

        <div className="reviews">
          <h3>Reviews</h3>
        </div>
      </div>
    );
  }

}

export default CurrentRoomShow;