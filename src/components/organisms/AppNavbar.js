import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  MdMovieCreation,
  MdOutlineSearch,
  MdLocalMovies,
  MdKeyboardReturn,
} from "react-icons/md";
import Button from "../atoms/Button";

const AppNavbar = () => {
  const location = useLocation();
  const nav = useNavigate();

  return (
    <div className="app-navbar-wrapper">
      <ul className="app-navbar-ul">
        {location.state === null ? (
          <>
            <li className="app-navbar-li">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "app-navbar-link active"
                    : "app-navbar-link"
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
                  navData.isActive
                    ? "app-navbar-link active"
                    : "app-navbar-link"
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
                  navData.isActive
                    ? "app-navbar-link active"
                    : "app-navbar-link"
                }
                to="/series"
              >
                <MdLocalMovies className="app-navbar-icon" />
                <p>Series</p>
              </NavLink>
            </li>
          </>
        ) : (
          <li className="app-navbar-li">
            <Button className="app-navbar-link" onClick={() => nav(-1)}>
              <MdKeyboardReturn className="app-navbar-icon" />
              <p className="app-navbar-p">Back</p>
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AppNavbar;
