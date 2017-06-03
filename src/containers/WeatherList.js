import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

class WeatherList extends Component {
  renderWeather = cityData => {
    return (
      <tr key={uuid()}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
