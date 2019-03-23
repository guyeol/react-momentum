/**
 * React Component Weather
 * @author guyeol, jeong [https://github.com/guyeol/react-momentum]
 * @class
 * @classdesc Display Weather based on current location.
 */

import React, { Component } from 'react';
import WeatherAPI from '../utils/weatherapi';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      temperature: 0,
      location: '',
      coords: {
        name: '',
        lat: 37.4937168,
        lon: 127.0381085,
      },
    };
  }

  componentDidMount() {
    this.getLocation();
    WeatherAPI.getWeather().then((response) => {
      this.setState({
        weather: response.weather[0].main,
        temperature: response.main.temp,
      });
    });
  }

  render() {
    return (
      <>
        <div>
          현재날씨: {this.state.weather}
        </div>
        <div>
          현재온도: {this.state.temperature}
        </div>
        <div>
          현재위치: {this.state.location}
        </div>
      </>
    );
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        this.setState({
          coords: {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          },
        });
      });
    } else {
      // error handling
    }
  }
}
