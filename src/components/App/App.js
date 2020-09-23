import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Components
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Spinner from "../Loader/Loader";
import Modal from "../Modal/Modal";
// Tools
import apiRequest from "../../services/apiRequest";
import scroll from "../../services/scroll";
//  Styles
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    loading: false,
    error: false,
    modalHref: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchRequest();
    }
    if (prevState.page !== this.state.page) {
      setTimeout(scroll, 1000);
    }

    if (prevState.images !== this.state.images) {
      localStorage.setItem("images", JSON.stringify(this.state.images));
    }
  }

  onSubmit = (value) => {
    if (
      this.state.searchQuery.toLocaleLowerCase() !== value.toLocaleLowerCase()
    ) {
      this.setState({ searchQuery: value, page: 1, images: [] });
    }
  };

  fetchRequest = () => {
    const { searchQuery, page, perPage } = this.state;
    //
    this.setState((prevState) => {
      return { page: prevState.page + 1, loading: true };
    });

    // this.setState({ loading: true });
    apiRequest(searchQuery, page, perPage)
      .then((response) =>
        this.setState((prevState) => {
          return { images: [...prevState.images, ...response.hits] };
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  // moreImages = async () => {
  //   await this.setState((prevState) => {
  //     return { page: prevState.page + 1 };
  //   });
  //   await this.fetchRequest();
  // };

  onOpenModal = (ev) => {
    this.setState({ modalHref: ev.target.dataset.value });
    window.addEventListener("keydown", this.onCloseModal);
  };

  onCloseModal = (ev) => {
    if (ev.code === "Escape" || ev.target.nodeName === "DIV") {
      this.setState({ modalHref: "" });
      window.removeEventListener("keydown", this.onCloseModal);
    }
  };

  render() {
    const { images, loading, modalHref } = this.state;

    return (
      <div className={styles.wrapper}>
        <SearchBar onSubmit={this.onSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.onOpenModal} />
        )}
        {images.length > 0 && !loading && (
          <Button moreImages={this.fetchRequest} />
        )}
        {loading && <Spinner />}
        {modalHref && <Modal href={modalHref} closeModal={this.onCloseModal} />}
      </div>
    );
  }
}
