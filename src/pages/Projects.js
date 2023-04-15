import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";

function Projects() {
  return (
    <div className="project">
      <h1 className="projectTitle">Projects</h1>
      <div className="projectList">
        {ProjectList.map((projectItem, key) => {
          return (
            <ProjectItem
              key={key}
              image={projectItem.image}
              name={projectItem.name}
              price={projectItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
