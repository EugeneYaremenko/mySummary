import React from "react";
import PropTypes from "prop-types";
import styles from "./workExp.module.css";

/* { id, position, company, start, end, country, [description (item)] } */

const WorkExp = ({ jobs }) => {
  return (
    <ul className={styles.job}>
      {jobs.map((job) => (
        <li key={job.id} className={styles.jobItem}>
          <p className={styles.jobPosition}>
            {job.position}{" "}
            <span className={styles.jobCompany}>{job.company}</span>
          </p>
          <span className={styles.jobDate}>
            {job.start} - {job.end} | {job.country}
          </span>
          <ul className={styles.jobDescription}>
            {job.description.map((desc) => (
              <li key={desc.id} className={styles.jobDescriptionItem}>
                {desc.item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

WorkExp.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      position: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      description: PropTypes.shape({
        id: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
      }),
    })
  ),
};

export default WorkExp;
