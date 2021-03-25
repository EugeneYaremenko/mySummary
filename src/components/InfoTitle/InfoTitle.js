import React from "react";
import PropTypes from "prop-types";
import styles from "./infoTitle.module.css";

const InfoTitile = ({ title }) => {
  return <p className={styles.title}>{title}</p>;
};

InfoTitile.propTypes = {
  title: PropTypes.string,
};

export default InfoTitile;
