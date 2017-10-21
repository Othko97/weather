// Imports
import React, { Component } from 'react';
import './css/CurrentWeatherDetail.css';

class CurrentWeatherDetail extends Component {

    constructor(props) {
        super(props);
        // Set initial state.
        this.state = {
            timeOfDay: '',
            sunriseTime: '',
            sunsetTime: ''
        };
    }

    // Lifecycle method.
    componentWillReceiveProps(nextProps) {
        if (nextProps.weatherData.sys !== undefined) { // Checks if props has weatherData information or not, runs the following if it is present.
            // Initialise an object with sunrise and sunset times of target location.
            let sunTimes = {sunriseTime: nextProps.weatherData.sys.sunrise, sunsetTime: nextProps.weatherData.sys.sunrise};
            // Compares current time with passed in times to check whether it is day or night.
            let timeOfDay = this.returnTimeOfDay(new Date(), sunTimes.sunriseTime, sunTimes.sunsetTime);
            // Converts times from UNIX timestamp to actual times, correcting for single digits.
            let sunriseTime = this.returnTime(new Date(sunTimes.sunriseTime * 1000));
            let sunsetTime = this.returnTime(new Date(sunTimes.sunsetTime * 1000));

            // Sets state.
            this.setState({ timeOfDay, sunriseTime, sunsetTime });
            return;
        }
    }

    returnTime(DateObject) {
        // Gets the minutes of the passed in Date Object, and converts to a string.
        let minutes = DateObject.getMinutes().toString();
        // If statement to check if minutes is a single number, and to add a 0 in front if that is the case.
        if (minutes.length === 1) {
            minutes = `0${minutes}`;
        }
        // Get hours as string.
        let hours = DateObject.getHours().toString();
        return `${hours}:${minutes}`
    }

    returnTimeOfDay(DateObject, sunrise, sunset) {
        // Gets timestamp of passed in object.
        let timestamp = DateObject.getTime();
        // Removes last three digits of timestamp, as timestamps from the API do not have them.
        timestamp = Math.floor(timestamp / 1e03);
        // Compares times, and returns the corresponding time of day.
        if (timestamp < sunrise || timestamp > sunset) {
            return 'night';
        } else {
            return 'day';
        }
    }

    render() {
        if (this.props.weatherData.weather === undefined) {
            return null;
        }

        return (
            <div>
                <div className="title-container">
                    <h1>Current Weather</h1>
                </div>
                <div className="current-weather-detail">

                    <div className="weather-card">
                        <h3>Weather</h3>
                        <h3>{this.props.weatherData.weather[0].description}</h3>
                        <i className={`wi wi-owm-${this.state.timeOfDay}-${this.props.weatherData.weather[0].id}`}></i>
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

                    <div className="weather-card">
                        <h3>Wind Speed</h3>
                        <h3>{this.props.weatherData.wind.speed}mph</h3>
                        <i className="wi wi-owm-957"></i>
                    </div>

                    <div className="weather-card">
                        <h3>Sunrise</h3>
                        <h3>{this.state.sunriseTime}</h3>
                        <i className="wi wi-sunrise"></i>
                    </div>

                    <div className="weather-card">
                        <h3>Sunset</h3>
                        <h3>{this.state.sunsetTime}</h3>
                        <i className="wi wi-sunset"></i>
                    </div>

                </div>
            </div>
        )
    }
}

export default CurrentWeatherDetail;