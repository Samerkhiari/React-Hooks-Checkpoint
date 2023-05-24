import React from 'react';
import ReactStars from "react-stars";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <div>
        <img src={movie.image} alt={movie.name} />
      </div>
      <h2 id='moviename'>{movie.name}</h2>
      {
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={movie.rating}
              edit={false}
            />
          }
      <p>Date: {movie.date}</p>
      <p>Type: {movie.type}</p>
      <p>Seasons: {movie.seasons}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
}

export default MovieCard;
