import React, { Component } from 'react';
import './css/CurrentWeatherDetail.css';

class CurrentWeatherDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeOfDay: '',
            sunriseTime: '',
            sunsetTime: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.weatherData.sys !== undefined) {
            let sunTimes = {sunriseTime: nextProps.weatherData.sys.sunrise, sunsetTime: nextProps.weatherData.sys.sunrise};
            let timeOfDay = this.compareTimes(new Date(), sunTimes.sunriseTime, sunTimes.sunsetTime);
            let sunriseTime = this.returnTime(new Date(sunTimes.sunriseTime * 1000));
            let sunsetTime = this.returnTime(new Date(sunTimes.sunsetTime * 1000));

            this.setState({ timeOfDay, sunriseTime, sunsetTime });
            return;
        }
    }

    returnTime(DateObject) {
        let time = ``;
        let minutes = DateObject.getMinutes().toString();
        if (minutes.length === 1) {
            minutes = `0${minutes}`;
        }
        let hours = DateObject.getHours().toString();
        return `${hours}:${minutes}`
    }

    compareTimes(DateObject, sunrise, sunset) {
        let timestamp = DateObject.getTime();
        timestamp = Math.floor(timestamp / 1e03);
        if (timestamp < sunrise || timestamp > sunset) {
            let timeOfDay = 'night';
            return timeOfDay;
        } else {
            let timeOfDay = 'day';
            return timeOfDay;
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