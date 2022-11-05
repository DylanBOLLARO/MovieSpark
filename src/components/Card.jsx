import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="Card">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`Affiche du film ${movie.title}`}
      />
    </div>
  );
};

export default Card;
