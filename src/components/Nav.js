import React from "react";
import "../css/nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <a className="home-button anton" href="#home" id="buttonText">
        ga
      </a>
      <div className="nav-links">
        <a className="anton" href="#about">
          about
        </a>
        <a className="anton" href="#random">
          picture
        </a>
      </div>
    </div>
  );
};

export default Nav;
