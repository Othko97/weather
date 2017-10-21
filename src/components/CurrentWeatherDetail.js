import React from 'react';
import './css/CurrentWeatherDetail.css';

const CurrentWeatherDetail = props => {

    const weatherData = props.weatherData;

    if (props.weatherData.weather === undefined) {
        return null;
    }

    return (
        <div className="current-weather-detail">

            <div className="weather-card">
                <h3>Weather</h3>
                <h3>{weatherData.weather[0].main}</h3>
                <i className={`wi wi-${weatherData.weather[0].main.toLowerCase()}`}></i>
            </div>

            <div className="weather-card">
                <h3>Temperature</h3>
                <h3>{weatherData.main.temp}&#8451;</h3>
                <i className="wi wi-thermometer"></i>
            </div>

            <div className="weather-card">
                <h3>Pressure</h3>
                <h3>{weatherData.main.pressure} hPa</h3>
                <i className="wi wi-barometer"></i>
            </div>

            <div className="weather-card">
                <h3>Humidity</h3>
                <h3>{weatherData.main.humidity}%</h3>
                <i className="wi wi-humidity"></i>
            </div>

        </div>
    )
}

export default CurrentWeatherDetail;