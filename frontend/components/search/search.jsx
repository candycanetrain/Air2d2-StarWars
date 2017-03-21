import React from 'react';
import { withRouter } from 'react-router';
//
//import RoomMap from '../room_map/room_map';
//import {RoomIndex} from '../rooms/room_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleForm(e) {
    e.preventDefault();
    this.props.fetchRooms({city: city, startDate: startDate, endDate: endDate, guests: guests})
  }

  render() {

    return(
      <div className="user-pane">
        <div className="search-form-row">
          <form id="search-form1" className="search-form">
            <ul className="search-form-ul">
              <li className="search-form-location">
                <label htmlFor="search-location" className="search-form-label">Where</label>
                <br />
                <input type="text" className="location-input" name="city" id="search-location" placeholder="City"/>
              </li>

              <li className="search-form-dates"> 
                <label htmlFor="search-dates" className="search-form-label">When</label>
                <br />
                
                    <input type="text" className="date-input" name="startDate" placeholder="Check In"/>
                    <input type="text" className="date-input" name="endDate" placeholder="Check Out"/>
           
              </li>

              <li className="search-form-guests">
                <label htmlFor="search-guests" className="search-form-guests">Guests</label>
                <br />
                
                <select className="guests-input" name="guests" id="search-guests" placeholder="2 Guests">  
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
              </li>
            </ul>
            
          </form>
          <button type="submit" onClick={this.handleForm.bind(this)} className="search-button">
              <i className="fa fa-search" aria-hidden="true"></i>
          </button>
          
        </div>
      </div>
    );
    
  }
}

export default Search;