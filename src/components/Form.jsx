import { React, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Form() {
  const [moviesData, setMoviesData] = useState([]);
  // const subscription = props.source.subscribe();

  useEffect(() => {
    // axios
    //   .get(
    //     "https://api.themoviedb.org/3/search/movie?api_key=4042816bd1f4f2f97945e11f6932ecd4&query=Avengers"
    //   )
    //   .then((res) => setMoviesData(res.data.results));

    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4042816bd1f4f2f97945e11f6932ecd4&language=page=1"
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="affichage">
      <div className="Form">
        <input
          type="text"
          placeholder="Nom du film"
          onChange={(e) => {
            datamovie = e.target.value;
          }}
        />
        <input type="submit" value="Rechercher" />
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
