import React from "react";
import Project from "./Project";
import projectStyles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className={projectStyles.projects}>
        <Project />
      </div>
    </>
  );
};

export default Projects;
