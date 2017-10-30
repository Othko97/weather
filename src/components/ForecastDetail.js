import React, { Component } from 'react';
import './css/ForecastDetail.css';

class ForecastDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {trimmedForecastData: {}};
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.forecastData.list === undefined) {
            return null;
        }

        else {
            let trimmedForecastData = [
                nextProps.forecastData.list[7],
                nextProps.forecastData.list[15],
                nextProps.forecastData.list[23],
                nextProps.forecastData.list[31],
                nextProps.forecastData.list[39]
            ];
            this.setState({trimmedForecastData});
        }
    }

    render() {
        if (this.props.forecastData.list === undefined) {
            return null;
        }

        return (
            <div>
                <div className="title-container">
                    <h1>Forecast</h1>
                </div>
                <div className="forecast-detail">

                    <div className="weather-card">
                        <h3>{this.state.trimmedForecastData[0].weather[0].description}</h3>
                        <i class={`wi wi-owm-${this.state.trimmedForecastData[0].weather[0].id}`} />
                        <h3>{this.state.trimmedForecastData[0].main.temp}&#8451;</h3>
                    </div>

                    <div className="weather-card">
                        <h3>{this.state.trimmedForecastData[1].weather[0].description}</h3>
                        <i class={`wi wi-owm-${this.state.trimmedForecastData[1].weather[0].id}`} />
                        <h3>{this.state.trimmedForecastData[1].main.temp}&#8451;</h3>
                    </div>

                    <div className="weather-card">
                        <h3>{this.state.trimmedForecastData[2].weather[0].description}</h3>
                        <i class={`wi wi-owm-${this.state.trimmedForecastData[2].weather[0].id}`} />
                        <h3>{this.state.trimmedForecastData[2].main.temp}&#8451;</h3>
                    </div>

                    <div className="weather-card">
                        <h3>{this.state.trimmedForecastData[3].weather[0].description}</h3>
                        <i class={`wi wi-owm-${this.state.trimmedForecastData[3].weather[0].id}`} />
                        <h3>{this.state.trimmedForecastData[3].main.temp}&#8451;</h3>
                    </div>

                    <div className="weather-card">
                        <h3>{this.state.trimmedForecastData[4].weather[0].description}</h3>
                        <i class={`wi wi-owm-${this.state.trimmedForecastData[4].weather[0].id}`} />
                        <h3>{this.state.trimmedForecastData[4].main.temp}&#8451;</h3>
                    </div>

                </div>
            </div>
        )
    }
}

export default ForecastDetail;