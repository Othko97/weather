import React, { Component } from 'react';
import './css/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
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

    onSearchClick = () => {
        this.props.getWeatherByLocation(this.state.locationSearchTerm);
        this.setState({ locationSearchTerm: '' });
    }

    onLocationClick = () => {
        this.props.getWeatherByCoords(this.props.location.latitude, this.props.location.longitude);
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.getWeatherByLocation(this.state.locationSearchTerm);
            this.setState({ locationSearchTerm: '' });
        }
    }
}

export default SearchBar;