// Imports
import React, { Component } from 'react';
import axios from 'axios';
import TopBar from './components/TopBar';
import CurrentWeatherDetail from './components/CurrentWeatherDetail';

// API Key
const key = '8cd851c616011af112f1978fd7b6433a';

class App extends Component {
  constructor(props) {
    super(props);

    //Set initial state.
    this.state = {
      weatherData : {},
      location: {}
    };
  }

  // Find users current location and fetch the weather data.
  componentWillMount() {
    this.initLocation();
  }

  // Take in coordinates and make a get request to the API with those co-ordinates.
  getWeatherByCoords = (lat, lon) => {
    axios.get(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}&units=metric`)
    .then(response => {
      this.setState({weatherData: response.data});
    })
  }

  // Take in location name and make a get request to the API with that name.
  getWeatherByLocation = (locationSearchTerm) => {
    axios.get(`//api.openweathermap.org/data/2.5/weather?q=${locationSearchTerm}&APPID=${key}&units=metric`)
    .then(response => {
      this.setState({weatherData: response.data});
    })
  }

  // Get users location and fetch weather.
  initLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.getWeatherByCoords(location.latitude, location.longitude);
      this.setState({ location });
    })
  }

  // Render components to the DOM.
  render() {
    return (
      <div>
        <TopBar
          getWeatherByLocation={this.getWeatherByLocation}
          getWeatherByCoords={this.getWeatherByCoords}
          weatherData={this.state.weatherData}
          location={this.state.location} />
          <CurrentWeatherDetail weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
