import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';


// const CityMovies = ({ movies }) => {
//     const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
// }

// const filteredMovies = this.props.movie.filter(movie => movie.poster !== null);

class Movie extends React.Component {
    render() {
        return (
            <>
                 {/* <h3>Movies About The City</h3>
                 {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
                 {/* <Carousel >
                     {filteredMovies.map((movie, movieIndex) => (
                         <Carousel.Item key={movieIndex}>
                             <img
                                 className="d-block w-100"
                                 src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
                                 alt={movie.title}
                                 style={{ maxHeight: '500px', objectFit: 'contain' }}
                             />
                             <h5>{movie.title}</h5>
                             <p>{movie.overview}</p>
                         </Carousel.Item>
                     ))}
                 </Carousel> */}
            </>
        )
    }
}


export default Movie;