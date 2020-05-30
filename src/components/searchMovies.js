import React, { useState, Fragment } from "react";
import MovieComponent from "./movieComponent";

export default function SearcMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  // method for handler submit info
  const seactHandler = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=dbb06a507f042d02c0d2495aabd3232a&query=${query}&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <Fragment>
      <form className="form" onSubmit={seactHandler}>
        <label className="label" htmlFor="query">
          Movies Search
        </label>
        <input
          type="text"
          name="query"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="i.e Jurassic Park"
        />
        <button className="button" type="submit">
          Look
        </button>
      </form>
      <div className="movie-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
      </div>
    </Fragment>
  );
}
//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit
