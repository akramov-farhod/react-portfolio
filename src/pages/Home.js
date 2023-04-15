import React from "react";
import { Link } from "react-router-dom";
import homePlaceholder from "../assets/homePlaceholder.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${homePlaceholder})` }}
    >
      <div className="headerContainer">
        <h1>Awesome Title</h1>
        <p>Some amazing Slogan</p>
        <Link to="/about">
          <button>ABOUT ME</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
