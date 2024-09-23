import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ isFullScreen = false }) => {
  return isFullScreen ? (
    <div className="loader-gif-modal">
      <img src="/images/loader.gif" alt="loader" />
    </div>
  ) : (
    <div className="d-flex justify-content-center align-item-center mw-100">
      <Spinner />
    </div>
  );
};

export default Loader;
