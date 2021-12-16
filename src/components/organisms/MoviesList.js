import React from "react";
import MovieCard from "../molecules/MovieCard";

const MoviesList = ({ name }) => {
  return (
    <div className="movie-list-wrapper">
      {name.map((item) => {
        return <MovieCard value={name} key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MoviesList;
