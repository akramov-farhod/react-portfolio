import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/homeImg.png";
import "../styles/Home.css";

function Home() {
  document.title = "Portfolio - Home";

  return (
    <div className="home" style={{ backgroundImage: `url(${homeImg})` }}>
      <div className="headerContainer">
        <h1>Farhod Akramov</h1>

        <Link to="/about">
          <button>ABOUT ME</button>
        </Link>
        <p id="quote">{`“When you change the way you look at things, the things you look at
          change.”`}</p>
        <p id="author">{`— Dr. Wayne Dyer`}</p>
      </div>
    </div>
  );
}

export default Home;
