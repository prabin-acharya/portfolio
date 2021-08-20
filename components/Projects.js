import React from "react";
import Project from "./Project";
import projectStyles from "../styles/Projects.module.css";
import projects from "../public/assets/ProjectDetail.js";

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className={projectStyles.projects}>
        <Project project={projects[0]} align="left" />
        <Project project={projects[1]} align="right" />
        <Project project={projects[2]} align="left" />
      </div>
    </>
  );
};

export default Projects;
