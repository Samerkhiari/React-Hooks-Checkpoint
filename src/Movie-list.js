import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({movies,searchName,searchRating}) => {
  return (
    <div className='container'>
      {movies
      .filter(
          (movie) =>
            movie.name.toLowerCase().includes(searchName.toLowerCase()) ||
            movie.rating === searchRating )
        .map((movie) => (
          <MovieCard movie={movie} />
          
        ))}
    </div>
  );
};

export default MovieList;
