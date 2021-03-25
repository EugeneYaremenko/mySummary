import React from 'react';
import PropTypes from 'prop-types';
import styles from './education.module.css';

const Education = ({ educations }) => {
  return (
    <ul className={styles.education}>
      {educations.map(education => (
        <li key={education.id} className={styles.educationItem}>
          <p className={styles.university}>{education.university}</p>
          <p className={styles.specialty}>{education.specialty}</p>
          <span className={styles.educationDate}>
            {education.start} - {education.end} | {education.country}
          </span>
        </li>
      ))}
    </ul>
  );
};

Education.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      university: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
};

export default Education;
