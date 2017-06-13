import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
   constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    if (this.props.bookings){
      const bookings = this.props.bookings || [];
      return(
        <div>
          <h2>Your Booked Trips: </h2>
          <ul>
            {bookings.map((booking) => (
            <li className="booking-item" key={booking.id}>
                  <BookingIndexItem booking={booking} deleteBooking={this.props.deleteBooking} />
            </li>
            ))}
          </ul>
        </div>
      )
    } else {
      null
    }
  }  
}
export default BookingIndex;
