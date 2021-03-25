import React from "react";
import PropTypes from "prop-types";
import styles from "./projects.module.css";

const Projects = ({ projects }) => {
  return (
    <ol className={styles.projects}>
      {projects.map((project) => (
        <li key={project.id} className={styles.projectsItem}>
          <div className={styles.projectLink}>
            <a target="_blanc" href={project.url} rel="noreferrer">
              {project.url}
            </a>
          </div>
          <div className={styles.dots}></div>
          <div className={styles.projectTech}>{project.technology}</div>
        </li>
      ))}
    </ol>
  );
};

Projects.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      technology: PropTypes.string.isRequired,
    })
  ),
};

export default Projects;
