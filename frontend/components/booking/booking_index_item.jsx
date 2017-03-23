import React from 'react';
import { withRouter } from 'react-router';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



  handleDelete(id, e) {
    e.preventDefault();
    this.props.deleteBooking(id);
  }

  render() {
    const booking = this.props.booking
    return(
      <div className="booking-index-item">
        <img src={booking.room.img_url} alt=""/>
        <h2>{booking.room.name}</h2>
        <h3>City: </h3><span>{booking.room.city}</span>
        <h4>Dates: </h4><span>{booking.start_date} - {booking.end_date}</span>
        <h4>Home Type: </h4><span>{booking.room.homeType}</span>
        <h4>Number of Guests: </h4><span>{booking.party_size}</span>
        <button onClick={this.handleDelete.bind(this, booking.id)}>Delete Booking</button>
      </div>
    )
  }
}

export default withRouter(BookingIndexItem);
