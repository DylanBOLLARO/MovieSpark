import { React, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Form() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        search
          ? `https://api.themoviedb.org/3/search/movie?api_key=4042816bd1f4f2f97945e11f6932ecd4&query=${search}&language=fr-FR`
          : `https://api.themoviedb.org/3/movie/popular?api_key=4042816bd1f4f2f97945e11f6932ecd4&language=fr-FR&page=1`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="affichage">
      <div className="Form">
        <input
          type="text"
          placeholder="Rechercher"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="result">
        {moviesData.map((movie) => (
          <Card movie={movie} key={movie.id} img={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default Form;
