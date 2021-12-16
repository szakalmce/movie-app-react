import React, { useContext } from "react";
import AppLayout from "../organisms/AppLayout";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../utils/Urls";
import { MdCalendarToday, MdStarRate } from "react-icons/md";
import Button from "../atoms/Button";
import { appContext } from "../../context/context";

const MovieDetails = () => {
  const context = useContext(appContext);
  const {
    watchlist,
    handleAddWatchlist,
    handleRemoveWatchlist,
    watched,
    handleAddWatched,
    handleRemoveWatched,
  } = context;

  const location = useLocation();

  const {
    name,
    title,
    vote_average,
    poster_path,
    release_date,
    overview,
    id,
    value,
    first_air_date,
  } = location.state;

  const WatchlistToggle = watchlist.find((x) => x.id === id);
  const WatchedToggle = watched.find((x) => x.id === id);

  return (
    <AppLayout activePagination={false}>
      <div className="container">
        <div className="details-wrapper">
          <div className="details-image">
            <img src={`${baseUrl}${poster_path}`} alt={baseUrl} />
          </div>
          <div className="details-text">
            <div>
              <h1 className="details-title">
                {title === undefined ? name : title}
              </h1>
              <p className="details-info">{overview}</p>
            </div>
            <div className="details-numbers">
              <div className="details-numbers-value">
                <MdCalendarToday className="detail-numbers-value-icon" />
                <p>
                  {release_date === undefined ? first_air_date : release_date}
                </p>
              </div>
              <div className="details-numbers-value">
                <MdStarRate className="detail-numbers-value-icon" />
                <p>{vote_average}/10</p>
              </div>
            </div>

            <div className="details-buttons">
              {WatchlistToggle ? (
                <Button
                  onClick={() => handleRemoveWatchlist(id, value)}
                  className="details-single-button primary"
                >
                  Remove Watchlist
                </Button>
              ) : (
                <Button
                  onClick={() => handleAddWatchlist(id, value)}
                  className="details-single-button primary"
                >
                  Add Watchlist
                </Button>
              )}

              {WatchedToggle ? (
                <Button
                  onClick={() => handleRemoveWatched(id, value)}
                  className="details-single-button secondary"
                >
                  Remove Watched
                </Button>
              ) : (
                <Button
                  onClick={() => handleAddWatched(id, value)}
                  className="details-single-button secondary"
                >
                  Add Watched
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MovieDetails;
