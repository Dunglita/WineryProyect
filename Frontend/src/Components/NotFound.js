import React from "react";
import "../css/NotFound.css";
import Nfound from "../Assets/Imagenes/NotFound.jpg";
import { Link } from "react-router-dom";
export default function NotFound(props) {
  return (
    <>
      <div id="main">
        <Link
          to={props.vinculo}
          className="btn btn-dark"
          id="btn-link"
          onClick={console.log(props)}
        >
          Home
        </Link>
      </div>
    </>
  );
}
