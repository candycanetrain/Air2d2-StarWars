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
        <img className="show-img" src={room.img_url} alt=""/>
        <div className="show-details">
          <ul className="current-room">
            
            <li><label className="detail-labels" id="detail-name">Name: </label> {room.name}</li>
            <li><label className="detail-labels" id="detail-city">City: </label> {room.city}</li>
            <li><label className="detail-labels" id="detail-price">Price: </label> {room.price}</li>
            <li><label className="detail-labels" id="detail-descripton">Description: </label> {room.description}</li>
            <li><label className="detail-labels" id="details">Bedrooms: </label> {room.bedrooms}</li>
            <li><label className="detail-labels" id="details">Beds: </label> {room.beds}</li>
            <li><label className="detail-labels" id="details">Bathrooms: </label> {room.bathrooms}</li>
            <li><label className="detail-labels" id="details">Home Type: </label> {room.homeType}</li>
            <li><label className="detail-labels" id="details">Accommodates: </label> {room.accommodates}</li>
            <li><label className="detail-labels" id="details">Amenities: </label> {room.amenities}</li>
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