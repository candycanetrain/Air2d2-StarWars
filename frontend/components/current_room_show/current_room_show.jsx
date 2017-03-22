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

  renderGuests(max_party_size) {
    if (max_party_size > 1) {
      return( <span className="big-details-items">{max_party_size} Guests</span>);
    } else {
      return( <span className="big-details-items">{max_party_size} Guest</span>);
    }
  }
  

  renderBedrooms(numOfBedrooms) {
    if (numOfBedrooms > 1) {
      return( <span className="big-details-items">{numOfBedrooms} Bedrooms</span>);
    } else {
      return( <span className="big-details-items">{numOfBedrooms} Bedroom</span>);
    }
  }

  renderBeds(numOfBeds) {
    if (numOfBeds > 1) {
      return( <span className="big-details-items">{numOfBeds} Beds</span>);
    } else {
      return( <span className="big-details-items">{numOfBeds} Bed</span>);
    }
  }

  render() {
    const room = this.props.room
    return(
      <div className="show-page">
        <img className="show-img" src={room.img_url} alt=""/>
        <div className="show-details">
          <div className="short-summary">
            
            <span className="detail-name">{room.name}</span>
            <span className="detail-city"><label>City: </label> {room.city}</span>
            
            <div className="big-details">
              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candycanetrain/image/upload/v1490186128/home_r5atyr.png" alt=""/>
                <span>{room.homeType}</span>             
              </div>
              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candycanetrain/image/upload/v1490186133/multiple-users-silhouette_knjpis.png" alt=""/>
                {this.renderGuests(room.accommodates)}
              </div>

              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candycanetrain/image/upload/v1490186126/door_fjofuz.png" alt=""/>
                {this.renderBedrooms(room.bedrooms)}
              </div>

              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candycanetrain/image/upload/v1490186124/bed_nzrgdr.png" alt=""/>
                {this.renderBeds(room.beds)}
              </div>
            </div>
          </div>

          <div className="about">
            <h4>About this Listing</h4>
            
            <table className="about-table">
              <tr>
                <th>This Space</th>
                <td>Accommodates: <span className="about-details">{room.accommodates}</span></td>
                <td>Bathrooms: <span className="about-details">{room.bathrooms}</span></td>
                <td>Bedrooms: <span className="about-details">{room.bedrooms}</span></td>
                <td>Beds: <span className="about-details">{room.beds}</span></td>
              </tr>
              <tr>
                <th>Price</th>
                <td>Extra people: <span className="about-details">{Number.parseInt(room.price*(0.2))}/ night for extra guests</span></td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{room.description}</td>
              </tr>
            </table>
          </div>
              
         


          
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