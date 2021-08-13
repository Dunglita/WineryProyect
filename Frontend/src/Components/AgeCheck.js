import Button from "react-bootstrap/Button";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import Loader from "./Loader";
import "../css/AgeCheck.css";
import leon from "../Assets/Imagenes/leon.png";
//TODO: FIX THE BUTTON SI que no es todo el area
export default function AgeCheck() {
  return (
    <div>
      <div className="agecheck">
        <div className="container-fluid agediv">
          <form
            action="http://127.0.0.1:5500/index.html"
            method="post"
            className="age-form"
          >
            <img src={leon} alt="" />
            <h2>¿Sos mayor de edad?</h2>
            <h6>Estamos comprometidos con el consumo responsable.</h6>
            <div className="buttons">
              <button type="button" className="btn btn-secondary age-btn">
                No
              </button>
              <Link to="/home" className="btn btn-info age-btn" id="link">
                Si
              </Link>
            </div>
            <h5>
              Beber con moderación. <br />
              Prohibida su venta a menores de 18 años.
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}
