import React from 'react';
import PropTypes from 'prop-types';
import styles from './contacts.module.css';

import spriteSVG from '../../images/SVG/Sprite.svg';

const Contacts = ({ contacts }) => {
  return (
    <address>
      <ul className={styles.contacts}>
        <li className={styles.contactsItem}>
          <svg className={styles.icon}>
            <use href={`${spriteSVG}#phone`}></use>
          </svg>
          <a
            href={`tel:${contacts.phone}`}
            className={styles.phone}
            target="_blank"
            rel="noreferrer"
          >
            {contacts.phone}
          </a>
        </li>
        <li className={styles.contactsItem}>
          <svg className={styles.icon}>
            <use href={`${spriteSVG}#email`}></use>
          </svg>
          <a href={`mailto:${contacts.email}`} target="_blank" rel="noreferrer">
            {contacts.email}
          </a>
        </li>
        <li className={styles.contactsItem}>
          <svg className={styles.icon}>
            <use href={`${spriteSVG}#github`}></use>
          </svg>
          <a href={contacts.github} target="_blank" rel="noreferrer">
            www.github.com
          </a>
        </li>
        <li className={styles.contactsItem}>
          <svg className={styles.icon}>
            <use href={`${spriteSVG}#linkedin`}></use>
          </svg>
          <a href={contacts.linkedin} target="_blank" rel="noreferrer">
            www.linkedin.com
          </a>
        </li>
        <li className={styles.contactsItem}>
          <svg className={styles.icon}>
            <use href={`${spriteSVG}#location`}></use>
          </svg>
          <a href={contacts.locationMap} target="_blank" rel="noreferrer">
            {contacts.location}
          </a>
        </li>
      </ul>
    </address>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    location: PropTypes.string,
    locationMap: PropTypes.string,
  }),
};

export default Contacts;
