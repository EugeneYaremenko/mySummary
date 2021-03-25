import React from "react";
import PropTypes from "prop-types";
import styles from "./faceImage.module.css";

const FaceImage = ({ src, alt }) => {
  return <img className={styles.faceImage} src={src} alt={alt} />;
};

FaceImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FaceImage;
