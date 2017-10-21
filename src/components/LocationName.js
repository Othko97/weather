// Imports
import React from 'react';
import './css/LocationName.css';

// Define LocationName as a functional component and extract weatherData from props.
const LocationName = ({weatherData}) => {
    // Displays loading if weatherData hasn't got the correct information yet (due to get request).
    if (weatherData.name === undefined) {
        return (
            <h1>Loading...</h1>
        )
    }
    // Displays name of location and country.
    return (
            <h1>{weatherData.name} - {weatherData.sys.country}</h1>
    )
}

export default LocationName;