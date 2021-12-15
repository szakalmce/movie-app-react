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

const Root = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const [inputValue, setInputValue] = useState("");

  // SEARCH MOVIES

  const location = useLocation();

  const getMovies = () => {
    const api = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `
        https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${inputValue}&page=1&include_adult=false`
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
    } else {
      setShowSearch(true);
    }
  }, [location]);

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
          </Routes>
        </div>
      </Layout>
    </appContext.Provider>
  );
};

export default Root;
