import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Contact";
import Movies from "./appPages/Movies";
import Search from "./appPages/Search";
import Series from "./appPages/Series";
import { appContext } from "./context/context";
import Watched from "./appPages/Watched";
import Watchlist from "./appPages/Watchlist";

import axios from "axios";
import MovieDetails from "./components/molecules/MovieDetails";

const Root = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);

  // SEARCH MOVIES

  const location = useLocation();

  const getMovies = () => {
    const api = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `
        https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`
      )
      .then((res) => {
        setSearch(res.data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, [inputValue]);

  useEffect(() => {
    if (location.pathname === "/search") {
      setShowSearch(false);
      setSearch([]);
    } else {
      setShowSearch(true);
    }
    setPage(1);
  }, [location]);

  // PAGINATION

  const handlerNextPage = () => {
    setPage(page + 1);
  };

  const handlerPrevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    getMovies();
    window.scrollTo(0, 0);
  }, [page]);

  // ADD TO WATCHLIST

  const handleAddWatchlist = (id, value) => {
    const findItem = value.find((item) => item.id === id);

    let uniqueValue = [...new Set([...watchlist, findItem])];

    setWatchlist(uniqueValue);
  };

  const handleRemoveWatchlist = (id, value) => {
    const removedItem = watchlist.filter((item) => item.id !== id);

    setWatchlist(removedItem);
  };

  // ADD TO WATCHED

  const handleAddWatched = (id, value) => {
    const findItem = value.find((item) => item.id === id);

    let uniqueValue = [...new Set([...watched, findItem])];

    setWatched(uniqueValue);
  };

  const handleRemoveWatched = (id, value) => {
    const removedItem = watched.filter((item) => item.id !== id);

    setWatched(removedItem);
  };

  return (
    <appContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        search,
        setSearch,
        inputValue,
        setInputValue,
        getMovies,
        showSearch,
        setShowSearch,
        page,
        handlerNextPage,
        handlerPrevPage,
        watchlist,
        handleAddWatchlist,
        handleRemoveWatchlist,
        handleAddWatched,
        handleRemoveWatched,
        watched,
      }}
    >
      <Layout>
        <div>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/:name" element={<MovieDetails />} />
          </Routes>
        </div>
      </Layout>
    </appContext.Provider>
  );
};

export default Root;
