import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="Card">
      <h2>{movie.title}</h2>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Affiche du film ${movie.title}`}
        />
        <p>{`${movie.overview.slice(0, 300)}...`}</p>
      </div>
    </div>
  );
};

export default Card;
