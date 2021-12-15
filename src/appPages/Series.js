import React, { useContext, useEffect } from "react";
import AppLayout from "../components/organisms/AppLayout";
import axios from "axios";
import { appContext } from "../context/context";
import MoviesList from "../components/organisms/MoviesList";

const Series = () => {
  const context = useContext(appContext);

  const { setSeries, series, showMovies } = context;

  const getMovies = () => {
    const api = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${api}&language=en-US&page=1`
      )
      .then((res) => {
        setSeries(res.data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <AppLayout>
      <div className="container">
        <div className="movies-wrapper">
          <MoviesList name={series} />
        </div>
      </div>
    </AppLayout>
  );
};

export default Series;
