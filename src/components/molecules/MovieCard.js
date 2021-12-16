import React from "react";
import { baseUrl } from "../../utils/Urls";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const MovieCard = ({
  title,
  name,
  backdrop_path,
  vote_average,
  poster_path,
  overview,
  release_date,
  id,
  value,
  first_air_date,
}) => {
  const movieTitle = title === undefined ? name : title;

  return (
    <Link
      to={`/${movieTitle}`}
      state={{
        title,
        name,
        backdrop_path,
        poster_path,
        vote_average,
        overview,
        release_date,
        id,
        value,
        first_air_date,
      }}
      className="single-movie-wrapper"
    >
      <div className="single-movie-overflow">
        <Button className="single-movie-button">Show More</Button>
      </div>
      <div className="single-movie-image">
        {backdrop_path === null ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            className="single-movie-img single-movie-no-image"
          />
        ) : (
          <img
            className="single-movie-img"
            src={`${baseUrl}${backdrop_path}`}
            alt=""
          />
        )}
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
