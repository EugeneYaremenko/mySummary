import React from "react";
import PropTypes from "prop-types";
import styles from "./skills.module.css";

const Skills = ({ skills }) => {
  return (
    <ul className={styles.skills}>
      {skills.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ))}
    </ul>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Skills;
