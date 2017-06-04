import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/Chart';
import GoogleMap from './../components/GoogleMap';
import uuid from 'uuid/v4';

class WeatherList extends Component {
  renderWeather = cityData => {
    const { lat, lon } = cityData.city.coord;
    const temps = cityData.list.map(weather => weather.main.temp - 273);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr className="tableBody" key={uuid()}>

        <td className="tableData"><GoogleMap lat={lat} lon={lon} /></td>

        <td className="tableData">
          <Chart data={temps} color="red" unit="°C" />
        </td>

        <td className="tableData">
          <Chart data={pressure} color="green" unit="hPa" />
        </td>

        <td className="tableData">
          <Chart data={humidity} color="blue" unit="%" />
        </td>

      </tr>
    );
  };

  render() {
    return (
      <table className="myTable">
        <thead>
          <tr className="tableHead">
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
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
