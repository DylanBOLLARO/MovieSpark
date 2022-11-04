import { React, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Form() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=4042816bd1f4f2f97945e11f6932ecd4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <>
      <div className="Form">
        <input type="text" placeholder="Nom du film" />
        <input type="submit" value="Rechercher" />
      </div>
      <div className="result">
        {moviesData.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default Form;
