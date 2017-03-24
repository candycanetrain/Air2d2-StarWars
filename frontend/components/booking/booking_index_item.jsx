import React from 'react';
import { withRouter } from 'react-router';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }



  handleDelete(id, e) {
    e.preventDefault();
    this.props.deleteBooking(id);
  }

  handleClick() {
    const roomId = this.props.booking.room.id;
    this.props.router.push(`rooms/${roomId}`);
  }

  render() {
    const booking = this.props.booking
    return(
      <div className="booking-index-item">
        <img onClick={this.handleClick} src={booking.room.img_url} alt=""/>
        <div className="booking-details">
          <div className="booking-info-details"><h2>{booking.room.name}</h2></div>
          <div className="booking-info-details"><h3>City: </h3><span>{booking.room.city}</span></div>
          <div className="booking-info-details"><h4>Dates: </h4><span>{booking.start_date} - {booking.end_date}</span></div>
          <div className="booking-info-details"><h4>Home Type: </h4><span>{booking.room.homeType}</span></div>
          <div className="booking-info-details"><h4>Number of Guests: </h4><span>{booking.party_size}</span></div>
          <button className="delete-booking-button" onClick={this.handleDelete.bind(this, booking.id)}>Delete Booking</button>
        </div>
      </div>
    )
  }
}

export default withRouter(BookingIndexItem);
