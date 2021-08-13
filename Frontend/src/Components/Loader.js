import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../css/Loader.css";

export default function Loader(props) {
  const [showLoader, setShowLoader] = useState("d-block");

  function showHideLoader(loaderClass) {
    if (loaderClass === "d-block") {
      setShowLoader("d-none");
    } else {
      setShowLoader("d-block");
    }
  }
  window.onload = function () {
    showHideLoader(showLoader);
  };

  return (
    <div id="fullspinner" className={showLoader}>
      <Spinner
        id="spinner"
        animation="grow"
        variant="dark"
        role="status"
        className={showLoader}
      >
        <span className="sr-only">Cargando...</span>
      </Spinner>
    </div>
  );
}
