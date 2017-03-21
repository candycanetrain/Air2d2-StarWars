import React from 'react';
import { Link } from 'react-router';
import RoomMap from '../room_map/room_map';
import BookingContainer from '../booking/booking_container';

// import RoomDetail from './room_detail';


class CurrentRoomShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.room;
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.room);
  }
  componentDidMount() {
    this.props.fetchRoom(this.props.roomId);
  }
  

  render() {
    const room = this.props.room
    return(
      <div className="show-page">
        <div className="show-details">
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
          <div className="reviews">
            <h3>Reviews</h3>
          </div>
        </div>
          
        <br/>

        <BookingContainer currentRoom={room}/>

        
      </div>
    );
  }

}

export default CurrentRoomShow;