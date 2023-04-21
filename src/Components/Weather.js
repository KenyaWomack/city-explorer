import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {

    render() {
        console.log(this.props)
                return (
                    <WeatherDay forecast={this.props.forecasts} />
                )
                };
    }

export default Weather;
