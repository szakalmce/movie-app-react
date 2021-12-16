import React, { useContext } from "react";
import { MdMovieFilter, MdList } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { appContext } from "../../context/context";

const AppBottomNavbar = () => {
  const context = useContext(appContext);

  return (
    <div className="app-navbar-bottom">
      <ul className="app-navbar-ul">
        <li className="app-navbar-li">
          <NavLink
            className={(navData) =>
              navData.isActive ? "app-navbar-link active" : "app-navbar-link"
            }
            to="/watched"
          >
            <MdMovieFilter className="app-navbar-icon" />
            <p>Watched</p>
          </NavLink>
        </li>
        <li className="app-navbar-li">
          <NavLink
            className={(navData) =>
              navData.isActive ? "app-navbar-link active" : "app-navbar-link"
            }
            to="/watchlist"
          >
            <MdList className="app-navbar-icon" />
            <p>Watchlist</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppBottomNavbar;
