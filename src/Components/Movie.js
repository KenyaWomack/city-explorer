import React from 'react';
import { Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
class Movie extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
            {this.props.movies.map((movie, index) => (
                    <Card style={{ width: '30rem' }} key={index}>
                        <Card.Img variant='top' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster}`} />
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                    </Card>
            ))}
            </>
        )
    }
}
export default Movie;