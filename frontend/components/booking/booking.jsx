import React from 'react';
import { Link } from 'react-router';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.currentRoom;
  }


  componentWillReceiveProps(newProps) {
    debugger
    this.setState(newProps.room);
  }

  componentDidMount() {
  }
  

  render() {
    debugger
    return(
      <div className="booking">
        <div className="booking-header">
          <div className="booking-header-item">
            <span className="booking-header-item-price">
              Price Here
            </span>
          </div>
         
          <div className="booking-header-item">
            <span className="booking-header-item-per-night">
              Per Night
            </span>
          </div>
        </div>

        <form action="">
          <div className="booking-panel">
            <div className="booking-panel-body">
              <div className="panel-row">
                <div className="panel1">
                  <div className="panel1-item">
                    <label className="panel-label" htmlFor="">Check In</label>
                    <input type="text" value="" placeholder="mm/dd/yyyy"/>
                  </div>
                  <div className="panel1-item">
                    <label className="panel-label" htmlFor="">Check Out</label>
                    <input type="text" value="" placeholder="mm/dd/yyyy"/>
                  </div>

                </div>

                <div className="panel2">
                  <div className="panel2-item">
                    <label className="panel-label" htmlFor="">Guests</label>
                    <select className="panel-guests" name="guests" id="panel-guests" placeholder="1 guest">  
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




      
      </div>
    );
  }

}

export default Booking;