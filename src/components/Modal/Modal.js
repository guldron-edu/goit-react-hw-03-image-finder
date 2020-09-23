import React from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

function Modal({ href, closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <img src={href} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
};

export default Modal;
