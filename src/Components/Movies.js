import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import Movie from './Movie';
class Movies extends React.Component {
  render() {
    return (
      <Movie  movie={this.props.movies} />
    );
  };
}
export default Movies;