import React from 'react';
import SearchBar from './SearchBar';
import LocationName from './LocationName';
import './css/TopBar.css';

const TopBar = ({ weatherData, getWeatherByLocation, getWeatherByCoords, location }) => {
    return (
        <div className="top-bar-container">
            <SearchBar
                getWeatherByLocation={getWeatherByLocation}
                getWeatherByCoords={getWeatherByCoords}
                location={location} />
            <LocationName weatherData={weatherData} />
        </div>
    )
}

export default TopBar;