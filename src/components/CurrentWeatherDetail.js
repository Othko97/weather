import React, { Component } from 'react';
import './css/CurrentWeatherDetail.css';

class CurrentWeatherDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: {},
            timeString: ''
        };
    }

    componentWillMount() {
        let date = new Date();
        let time = {
            hours: date.getHours(),
            minutes: date.getMinutes()
        }
        let timeString = `${time.hours} : ${time.minutes}`;
        this.setState({
            time,
            timeString
        })
    }

    render() {
        if (this.props.weatherData.weather === undefined || this.state.time === {}) {
            return null;
        }

        return (
            <div className="current-weather-detail">

             <div className="weather-card">
                 <h3>Weather</h3>
                 <h3>{this.props.weatherData.weather[0].main}</h3>
                 <i className={`wi wi-${this.props.weatherData.weather[0].main.toLowerCase()}`}></i>
             </div>

             <div className="weather-card">
                 <h3>Temperature</h3>
                 <h3>{this.props.weatherData.main.temp}&#8451;</h3>
                 <i className="wi wi-thermometer"></i>
             </div>

             <div className="weather-card">
                 <h3>Pressure</h3>
                 <h3>{this.props.weatherData.main.pressure} hPa</h3>
                 <i className="wi wi-barometer"></i>
             </div>

             <div className="weather-card">
                 <h3>Humidity</h3>
                 <h3>{this.props.weatherData.main.humidity}%</h3>
                 <i className="wi wi-humidity"></i>
             </div>

         </div>
        )
    }
}

export default CurrentWeatherDetail;