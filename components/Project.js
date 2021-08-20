import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectStyles from "../styles/Project.module.css";

const Project = ({ project, align }) => {
  return (
    <Link href="https://prabin-acharya.github.io/weather/">
      <div className={projectStyles.project}>
        {align == "left" && (
          <Image
            className={projectStyles.img}
            src={project.img}
            alt={project.alt}
            width={452}
            height={258}
          />
        )}

        <div className={projectStyles.description}>
          <p>
            <h2>{project.title}</h2>
            {project.description}
          </p>
          https://prabin-acharya.github.io/weather/
        </div>

        {align == "right" && (
          <Image
            className={projectStyles.img}
            src={project.img}
            alt={project.alt}
            width={452}
            height={258}
          />
        )}
      </div>
    </Link>
  );
};

export default Project;
