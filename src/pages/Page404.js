import React from "react";
import "../styles/Page404.css";
import page404gif from "../assets/Page404.gif";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="Page404">
      <div id="content">
        <div
          id="gifHolder"
          style={{ backgroundImage: `url(${page404gif})` }}
        ></div>
        <div id="text">
          {`Oopsies, looks like the page you are looking for doesn't exist, try exploring other parts of this website ◡̈`}
        </div>
      </div>
      <Link id="button" to="/">
        Go Home
      </Link>
    </div>
  );
}

export default Page404;
