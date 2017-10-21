// Imports
import React from 'react';
import SearchBar from './SearchBar';
import LocationName from './LocationName';
import './css/TopBar.css';

// Define TopBar as a functional component and bring in props.
const TopBar = (props) => {
    return (
        // Render SearchBar and LocationName components and pass in props.
        <div className="top-bar-container">
            <SearchBar
                getWeatherByLocation={props.getWeatherByLocation}
                getWeatherByCoords={props.getWeatherByCoords}
                location={props.location} />
            <LocationName weatherData={props.weatherData} />
        </div>
    )
}

export default TopBar;