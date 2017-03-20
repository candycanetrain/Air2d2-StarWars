import React from 'react';
import { withRouter } from 'react-router';




class RoomMap extends React.Component {

 
  
  // const _getCoordsObj = latLng => ({
  //   lat: latLng.lat(),
  //   lng: latLng.lng()
  // });

 
  componentDidMount() {

    const mapOptions = {
      center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
      zoom: 13
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {

    return(
      <div className="map" ref={map => this.mapNode = map} id='map-container'>
        Map
      </div>
    );
  }
}

export default withRouter(RoomMap);