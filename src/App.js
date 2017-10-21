import React, { Component } from 'react';
import axios from 'axios';
import TopBar from './components/TopBar';
import CurrentWeatherDetail from './components/CurrentWeatherDetail';

const key = '8cd851c616011af112f1978fd7b6433a';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData : {},
      location: {}
    };
  }

  componentWillMount() {
    this.initLocation();
  }

  getWeatherByCoords = (lat, lon) => {
    axios.get(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}&units=metric`)
    .then(response => {
      console.log(response.data);
      this.setState({weatherData: response.data});
    })
  }

  getWeatherByLocation = (locationSearchTerm) => {
    axios.get(`//api.openweathermap.org/data/2.5/weather?q=${locationSearchTerm}&APPID=${key}&units=metric`)
    .then(response => {
      console.log(response.data);
      this.setState({weatherData: response.data});
    })
  }

  initLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.getWeatherByCoords(location.latitude, location.longitude);
      this.setState({
        location
      });
    })
  }

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