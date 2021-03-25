import React from "react";
import styles from "./experience.module.css";

import Projects from "../Projects/Projects";
import WorkExp from "../WorkExp/WorkExp";
import Education from "../Education/Education";

// variables.js
import {
  myProf,
  myName,
  aboutMe,
  myProjects,
  myJobs,
  myEducation,
} from "../../helpers/variables/variables";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <p className={styles.prof}>{myProf}</p>

      <h1 className={styles.name}>{myName}</h1>
      <p className={styles.description}>{aboutMe}</p>

      <p className={styles.experienceTitle}>Projects</p>
      <Projects projects={myProjects} />

      <p className={styles.experienceTitle}>Work Experience</p>
      <WorkExp jobs={myJobs} />

      <p className={styles.experienceTitle}>Education</p>
      <Education educations={myEducation} />
    </section>
  );
};

export default Experience;
