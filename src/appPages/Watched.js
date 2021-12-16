import React, { useContext } from "react";
import AppLayout from "../components/organisms/AppLayout";
import MoviesList from "../components/organisms/MoviesList";
import { appContext } from "../context/context";

const Watched = () => {
  const context = useContext(appContext);

  const { watched } = context;

  return (
    <AppLayout activePagination={watched.length === 20 ? true : false}>
      <div className="container">
        <div className="movies-wrapper">
          <MoviesList name={watched} value="movies" />
        </div>
      </div>
    </AppLayout>
  );
};

export default Watched;
