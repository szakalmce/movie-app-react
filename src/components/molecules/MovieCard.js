import React from "react";
import { baseUrl } from "../../utils/Urls";
import { Link } from "react-router-dom";

const MovieCard = ({ title, name, backdrop_path, vote_average }) => {
  const movieTitle = title === undefined ? name : title;

  return (
    <Link to="/" className="single-movie-wrapper">
      <div className="single-movie-overflow"></div>
      <div className="single-movie-image">
        <img src={`${baseUrl}${backdrop_path}`} alt="" />
      </div>
      <div className="single-movie-title">
        <p>{movieTitle}</p>
      </div>
      <div className="single-movie-rate">
        <p>{vote_average}/10</p>
      </div>
    </Link>
  );
};

export default MovieCard;
