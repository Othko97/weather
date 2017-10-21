import React from 'react';
import './css/LocationName.css';

const LocationName = ({weatherData}) => {
    if (weatherData.name === undefined) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
            <h1>{weatherData.name} - {weatherData.sys.country}</h1>
    )
}

export default LocationName;