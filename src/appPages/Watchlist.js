import React, { useContext } from "react";
import AppLayout from "../components/organisms/AppLayout";
import MoviesList from "../components/organisms/MoviesList";
import { appContext } from "../context/context";

const Watchlist = () => {
  const context = useContext(appContext);

  const { watchlist } = context;

  return (
    <AppLayout activePagination={watchlist.length === 20 ? true : false}>
      <div className="container">
        <div className="movies-wrapper">
          <MoviesList name={watchlist} value="movies" />
        </div>
      </div>
    </AppLayout>
  );
};

export default Watchlist;
