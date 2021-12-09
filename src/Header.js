import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-inner flex space-between align-center">
            <h1 className="header-logo">LOGO</h1>
            <ul className="nav flex">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="sub-header">
        <div className="container">
          <h1>Project Title</h1>
          <h4>SubTitle</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
