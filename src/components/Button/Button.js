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
  moreImages: PropTypes.func.isRequired,
};

export default Button;
