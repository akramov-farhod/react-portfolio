import React from "react";
import "../App.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
// import Logo from "";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <p>FA</p>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
}

export default Navbar;
