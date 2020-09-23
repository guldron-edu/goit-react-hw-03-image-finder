import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func,
    href: PropTypes.string,
    text: PropTypes.string,
    restore: PropTypes.func,
    deleteLs: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal);
  }

  closeModalListener = (ev) => {
    if (ev.code === "Escape" || ev.target.nodeName === "DIV") {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.closeModalListener}>
        <div className={styles.modal}>
          {this.props.href && <img src={this.props.href} alt="" />}
          {this.props.text && (
            <section className={styles.restoreSection}>
              <p className={styles.text}>{this.props.text}</p>
              <button
                type="button"
                className={styles.btn}
                onClick={this.props.restore}
              >
                Restore
              </button>
              <button
                type="button"
                className={styles.btn}
                onClick={this.props.deleteLs}
              >
                No
              </button>
            </section>
          )}
        </div>
      </div>
    );
  }
}
