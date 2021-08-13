import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar1(props) {
  const [navScroll, setNavScroll] = useState(
    "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top"
  );

  window.onscroll = function () {
    if (window.scrollY >= 25) {
      setNavScroll("navbar navbar-expand-lg navbar-dark transpaNav fixed-top");
    } else {
      setNavScroll(
        "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top"
      );
    }
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" className={navScroll}>
        <Navbar.Brand href="/home">Espiritu Animal</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link id="item" href="bodega.html">
              Bodega
            </Nav.Link>
            <Nav.Link
              className="nav-link dropdown-toggle nav-item dropdown"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-hover="dropdown"
            >
              Vinos
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/vino/tintos">
                  Tintos
                </a>
                <a className="dropdown-item" href="/vino/blancos">
                  Blancos
                </a>
              </div>
            </Nav.Link>
            <Nav.Link id="item" href="restaurante.html">
              Restaurante
            </Nav.Link>
            <Nav.Link id="item" href="restaurante.html">
              Tienda
            </Nav.Link>
            <Nav.Link id="item" href="restaurante.html">
              Contacto
            </Nav.Link>
            <Link
              variant="info"
              size="sm"
              to="/personal"
              className="btn btn-info age-btn"
              id="btn-personal"
            >
              Personal
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Item>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <button
            id="buttonSideNav"
            className="navbar-toggler active ml-auto d-block"
            type="button"
            onClick={() => {
              alert("prueba");
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Nav.Item>
      </Navbar>
    </>
  );
}
