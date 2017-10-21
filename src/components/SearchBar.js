// Imports
import React, { Component } from 'react';
import './css/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        // Set initial state.
        this.state = { locationSearchTerm: '' };
    }

    render() {
        return (
            <div className="search-bar-container">

                <div className="icon-container left">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>

                <input
                    type="text"
                    placeholder="Search for a location."
                    value={this.state.locationSearchTerm}
                    onChange={e => this.setState({ locationSearchTerm: e.target.value })}
                    onKeyPress={this.onKeyPress} />

                <div className="icon-container middle" onClick={this.onSearchClick}>
                    <i
                        className="fa fa-plus-circle"
                        aria-hidden="true">
                    </i>
                </div>

                <div className="icon-container right" onClick={this.onLocationClick}>
                    <i className="fa fa-map-marker">
                    </i>
                </div>

            </div>
        )
    }

    // Handle click of search button.
    onSearchClick = () => {
        // Calls getWeatherByLocation function with the current search term as an argument.
        this.props.getWeatherByLocation(this.state.locationSearchTerm);
        // Resets locationSearchTerm.
        this.setState({ locationSearchTerm: '' });
    }
    
    // Handle click of location button by calling getWeatherByCoords function with current coordinates.
    onLocationClick = () => {
        this.props.getWeatherByCoords(this.props.location.latitude, this.props.location.longitude);
    }

    // Handles an enter key press (same as onSearchClick but with enter, not a click.)
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.getWeatherByLocation(this.state.locationSearchTerm);
            this.setState({ locationSearchTerm: '' });
        }
    }
}

export default SearchBar;