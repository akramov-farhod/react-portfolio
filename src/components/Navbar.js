import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useAnimate } from "framer-motion";
import Logo from "../assets/logoPlaceholder.png";
import "../App.css";
import "../styles/Navbar.css";
// import Logo from "";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div id={openLinks ? "open" : "close"} className="leftSide">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <MenuRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
