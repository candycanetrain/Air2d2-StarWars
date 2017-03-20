import React from 'react';
import { withRouter } from 'react-router';

let _mapOptions = {
    center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
    zoom: 13
};


class RoomMap extends React.Component {


  // const _getCoordsObj = latLng => ({
  //   lat: latLng.lat(),
  //   lng: latLng.lng()
  // });

 
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {

    return(
      <div className="map" ref="map" id='map-container'>
        Map
      </div>
    );
  }
}

export default withRouter(RoomMap);