import React from "react";
import PropTypes from "prop-types";
import styles from "./wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
