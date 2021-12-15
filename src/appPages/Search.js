import React, { useContext, useState, useEffect } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import AppLayout from "../components/organisms/AppLayout";
import MoviesList from "../components/organisms/MoviesList";
import { appContext } from "../context/context";
import axios from "axios";

const Search = () => {
  const context = useContext(appContext);

  const { search, setInputValue, showSearch, setShowSearch } = context;

  const handlerForm = (e) => {
    e.preventDefault();
    setShowSearch(true);
    setInputValue(e.target.search.value);
    e.target.search.value = "";
  };

  return (
    <AppLayout>
      <div className="container">
        <div className="movies-wrapper">
          <form onSubmit={handlerForm} className="search-form">
            <Input
              className="search-input"
              type="text"
              placeholder="search..."
              name="search"
            />
            <Button type="submit" className="search-button">
              Search
            </Button>
          </form>
        </div>
        {showSearch ? <MoviesList name={search} /> : null}
      </div>
    </AppLayout>
  );
};

export default Search;
