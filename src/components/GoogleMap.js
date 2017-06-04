import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    console.log(this);
    new google.maps.Map(this.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    //this.refs.map
    return <div id="maps" ref={googleMap => (this.map = googleMap)} />;
  }
}

export default GoogleMap;
