import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ smalllImageHref, largeImageHref }) {
  return (
    <img
      src={smalllImageHref}
      alt=""
      className={styles.image}
      data-value={largeImageHref}
    />
  );
}

ImageGalleryItem.propTypes = {
  largeImageHref: PropTypes.string.isRequired,
  smalllImageHref: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
