import React from 'react';
import { Link } from 'react-router';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import DatePicker from 'react-datepicker';

import {START_DATE, END_DATE} from 'react-dates/constants';
import {hashHistory} from 'react-router';
import moment from 'moment';



class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party_size: 1
    };
    // this.state = props.party_size;
  
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleBook = this.handleBook.bind(this);
    this.handlePartySize = this.handlePartySize.bind(this);

  }


  componentWillReceiveProps(newProps) {
    // debugger
    this.setState(newProps.room);
  }

  componentDidMount() {
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  handleBook(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUser.id;
    const currentRoomId = this.props.currentRoom.id;
    const startDate = this.state.startDate._d;
    const endDate = this.state.endDate._d;
    const party_size = this.state.party_size;
    this.props.createBooking({user_id: currentUserId, room_id: currentRoomId, start_date: startDate, end_date: endDate, party_size: party_size })
    
  }

  handlePartySize(e) {
    e.preventDefault();
    this.setState({
      party_size: e.target.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,i) => (
          <li key={`errors-${i} `}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  

  render() {
    console.log(this.state);
    return(
      <div className="booking">
        <div className="booking-header">
          <div className="booking-header-item">
            <span className="booking-header-item-price">
              {this.props.room.price}
            </span>
          </div>
         
          <div className="booking-header-item">
            <span className="booking-header-item-per-night">
              Per Night
            </span>
          </div>
        </div>

        <form action="">
          {this.renderErrors()}
          <div className="booking-panel">
            <div className="booking-panel-body">
              <div className="panel-row">
                <div className="panel1">


                  <div className="panel1-item">
                    <label className="panel-label" htmlFor="">Check In</label>
                    <DatePicker
                      selected={this.state.startDate}
                      selectsStart  startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      placeholderText="mm/dd/yy"                      
                      onChange={this.handleChangeStart} />
                    
                  </div>
                  <div className="panel1-item">
                    <label className="panel-label" htmlFor="">Check Out</label>
                    <DatePicker
                      selected={this.state.endDate}
                      selectsEnd  startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      placeholderText="mm/dd/yy"
                      onChange={this.handleChangeEnd}
                    />
                  </div>

                </div>

                <div className="panel2">
                  <div className="panel2-item">
                    <label className="panel-label" htmlFor="">Guests</label>
                    <select className="panel-guests" name="guests" id="panel-guests" placeholder="1 guest" onChange={this.handlePartySize}>  
                      <option value="1">1 guest</option>
                      <option value="2">2 guests</option>
                      <option value="3">3 guests</option>
                      <option value="4">4 guests</option>
                      <option value="5">5 guests</option>
                      <option value="6">6 guests</option>
                      <option value="7">7 guests</option>
                      <option value="8">8 guests</option>
                      <option value="9">9 guests</option>
                      <option value="10">10 guests</option>
                      <option value="11">11 guests</option>
                      <option value="12">12 guests</option>
                    </select> 
                  </div>
                </div>

              </div>

            </div>
          </div>  
        </form>
        <button onClick={this.handleBook}>Book</button>
      </div>
    );
  }

}

export default Booking;