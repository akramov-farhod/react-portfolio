import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({ image, name, description, url, repo }) {
  return (
    <div className="projectItem">
      <div id="imgWrap" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{description}</p>
      <Link id="address" to={url} target="blank">
        URL
      </Link>
      <Link id="repository" to={repo} target="blank">
        Repository
      </Link>
    </div>
  );
}

export default ProjectItem;
