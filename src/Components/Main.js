import React from 'react';
import axios from 'axios';
import CityForm from './Form';
import CityAlert from './Alert';
import CityCard from './Card';
import Weather from './Weather';
// import CityMovies from './Movie';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityData: [],
            mapUrl: '',
            error: false,
            errorMessage: '',
            forecasts: [],
            showWeather: false,
            movies: [],
            showMovie: false
        }
    }

    handleCityInput = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    getCityData = async (event) => {
        event.preventDefault();
        try {
            let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.city}&format=json`

            let cityData = await axios.get(url);

            let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=12&size=600x400&format=png`

            this.setState({ cityData: cityData.data[0], mapUrl: mapUrl, error: false });

            let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}&searchQuery=${this.state.city}`;

            let weatherData = await axios.get(weatherUrl);

            this.setState({ forecasts: weatherData.data, showWeather: true, error: false });

            let movieUrl = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`;

            let movieData = await axios.get(movieUrl);

            this.setState({ movies: movieData.data, showMovie: true, error: false });

        } catch (error) {
            this.setState({ error: true, errorMessage: error.message });
        }
    };

    render() {
        console.log(this.state)
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 className='city-header'>Travel Around The Globe From Home</h2>
                        <CityForm onFormSubmit={this.getCityData} onCityInputChange={this.handleCityInput} />
                    </Col>
                </Row>
                <h3>City Name & Latitude/Longitude</h3>
                <Row>
                    <Col>
                        {this.state.error ? (
                            <CityAlert errorMessage={this.state.errorMessage} />
                        ) : (
                            <CityCard cityData={this.state.cityData} />
                        )}
                    </Col>
                </Row>
                <h3>Map of the city</h3>
                <Row>
                    <Col className='city-map'>
                        {this.state.mapUrl && (
                            <Image src={this.state.mapUrl} alt='Map of the city' />
                        )}
                    </Col>
                </Row>
                {this.state.showWeather && (
                    <Row>
                        <Col>
                            <Weather forecasts={this.state.forecasts} />
                        </Col>
                    </Row>
                )}
                {this.state.movies.length > 0 && (
                    <Row>
                        <Col>
                            {/* <CityMovies movies={this.state.movies} /> */}
                        </Col>
                    </Row>
                )}
            </Container>
        )
    }
}

export default Main;