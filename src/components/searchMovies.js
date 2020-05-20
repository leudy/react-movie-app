import React from "react";

export default function SearcMovies() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movies Search
      </label>
      <input
        type="text"
        name="query"
        className="query"
        placeholder="i.e Jurassic Park"
      />
      <button className="searchbtn" type="submit">
        Look
      </button>
    </form>
  );
}
