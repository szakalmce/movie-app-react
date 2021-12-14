import React from "react";
import AppBottomNavbar from "./AppBottomNavbar";
import AppNavbar from "./AppNavbar";

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <div>
        <div className="sub-header">
          <div className="container">
            <h1>Movie App</h1>
            <h4>REACT / JS / HTML / CSS</h4>
          </div>
        </div>
      </div>
      <AppNavbar />
      {children}
    </div>
  );
};

export default AppLayout;
