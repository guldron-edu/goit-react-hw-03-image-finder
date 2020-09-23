import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

function Button({ moreImages }) {
  return (
    <button type="button" className={styles.btn} onClick={moreImages}>
      Load more...
    </button>
  );
}

Button.propTypes = {
  largeImageHref: PropTypes.string.isRequired,
  smalllImageHref: PropTypes.string.isRequired,
};

export default Button;
