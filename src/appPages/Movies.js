import React, { useEffect, useContext } from "react";
import AppLayout from "../components/organisms/AppLayout";
import MoviesList from "../components/organisms/MoviesList";
import axios from "axios";
import { appContext } from "../context/context";

const Movies = () => {
  const context = useContext(appContext);

  const { setMovies, movies } = context;

  const getMovies = async () => {
    const api = process.env.REACT_APP_API_KEY;

    await axios
      .get(
        `
    https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <AppLayout>
        <div className="container">
          <div className="movies-wrapper">
            <MoviesList name={movies} />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Movies;
