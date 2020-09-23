import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.js";

function ImageGallery({ images, openModal }) {
  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id} className={styles.element} onClick={openModal}>
          <ImageGalleryItem
            smalllImageHref={image.webformatURL}
            largeImageHref={image.largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
    })
  ),
};

export default ImageGallery;
