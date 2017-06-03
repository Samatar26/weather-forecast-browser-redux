import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/Chart';
import uuid from 'uuid/v4';

class WeatherList extends Component {
  renderWeather = cityData => {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    console.log(cityData.list);
    return (
      <tr key={uuid()}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="red" /></td>
        <td><Chart data={pressure} color="green" /></td>
        <td><Chart data={humidity} color="blue" /></td>
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
