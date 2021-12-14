import React from "react";
import AppLayout from "../components/organisms/AppLayout";
import MoviesList from "../components/organisms/MoviesList";

const Movies = () => {
  return (
    <>
      <AppLayout>
          <div className="container">
            <div className="movies-wrapper">
                <MoviesList name="movies"/>
            </div>
          </div>
      </AppLayout>
    </>
  );
};

export default Movies;
