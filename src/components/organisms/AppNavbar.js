import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdMovieCreation,
  MdOutlineSearch,
  MdLocalMovies,
} from "react-icons/md";

const AppNavbar = () => {
  return (
    <div className="app-navbar-wrapper">
      <ul className="app-navbar-ul">
        <li className="app-navbar-li">
          <NavLink
            className={(navData) =>
              navData.isActive ? "app-navbar-link active" : "app-navbar-link"
            }
            to="/"
          >
            <MdMovieCreation className="app-navbar-icon" />
            <p>Movies</p>
          </NavLink>
        </li>
        <li className="app-navbar-li">
          <NavLink
            className={(navData) =>
              navData.isActive ? "app-navbar-link active" : "app-navbar-link"
            }
            to="/search"
          >
            <MdOutlineSearch className="app-navbar-icon" />
            <p>Search</p>
          </NavLink>
        </li>
        <li className="app-navbar-li">
          <NavLink
            className={(navData) =>
              navData.isActive ? "app-navbar-link active" : "app-navbar-link"
            }
            to="/series"
          >
            <MdLocalMovies className="app-navbar-icon" />
            <p>Series</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNavbar;
