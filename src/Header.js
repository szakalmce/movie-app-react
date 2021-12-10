import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-inner ">
            <h1 className="header-logo">TomaszGarbarz</h1>
            <ul className="nav flex">
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "nav-link active custom-button"
                      : "nav-link custom-button"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
