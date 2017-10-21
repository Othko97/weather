import React, { Component } from 'react';
import './css/CurrentWeatherDetail.css';

class CurrentWeatherDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeOfDay : ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.weatherData.sys !== undefined) {
            let date = new Date();
            let timeOfDay = this.compareTimes(date, nextProps.weatherData.sys.sunrise, nextProps.weatherData.sys.sunset);
            this.setState({timeOfDay});
            return;
        }
    }

    compareTimes(curTimeObject, sunrise, sunset) {
        let timestamp = curTimeObject.getTime();
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

         </div>
        )
    }
}

export default CurrentWeatherDetail;