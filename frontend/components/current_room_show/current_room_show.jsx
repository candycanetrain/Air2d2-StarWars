import React from 'react';
import { Link } from 'react-router';

// import RoomDetail from './room_detail';


class CurrentRoomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <div>
        <ul className="current-room">
          <img src="" alt=""/>
          <li>Name: {}</li>
          <li>City: {}</li>
          <li>Price: {}</li>
          <li>Description: {}</li>
          <li>Bedrooms: {}</li>
          <li>Beds: {}</li>
          <li>Bathrooms: {}</li>
          <li>Home Type: {}</li>
          <li>Accommodates: {}</li>
          <li>Amenities: {}</li>
          
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