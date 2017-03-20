import React from 'react';
import { withRouter } from 'react-router';
//
//import RoomMap from '../room_map/room_map';
//import {RoomIndex} from '../rooms/room_index';

class Search extends React.Component {

  render() {

    return(
      <div className="user-pane">
        <div className="search-form-row">
          <form action="" className="search-form">
            <div className="search-form-location">
              <label for="search-location" className="search-form-label">Where</label>
              <input type="text" className="location-input" name="location" id="search-location" placeholder="City"/>
            </div>

             <div className="search-form-dates"> 
              <label for="search-dates" className="search-form-label">When</label>
              <div id="search-dates-div">
                  <input type="text" className="date-input" name="startDate" placeholder="Check In"/>
                  <input type="text" className="date-input" name="endDate" placeholder="Check Out"/>
              </div>
            </div>

            <div className="search-form-guests">
              <label for="search-guests" className="search-form-guests">Guests</label>
              <input type="text" className="guests-input" name="guests" id="search-guests" placeholder="2 Guests"/>              
            </div>
            <button className="search-button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
          
        </div>

        <div className="map-side">
          <h5>Map goes here</h5>
        </div>

      </div>
    );
    
  }
}

export default Search;