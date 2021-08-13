import React from "react";
import "../css/SideMenu.css";
export default function SideMenu() {
  return (
    <div>
      <div className="container d-flex">
        <div
          id="sidebarMenu"
          className="fixed-top ml-auto d-block"
          style={{ marginRight: "-25%" }}
        >
          <div id="cerrarSideNavbar" className="d-flex">
            <a
              href=""
              style={{ display: "block ml-auto" }}
              onClick="cerrarSideNav(event)"
            >
              <img src="Iconos/x.svg" alt="" />
            </a>
          </div>
          <ul className="list-unstyled">
            <li>
              <a href="index.html" className="">
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a href="bodega.html" className="">
                Bodega
              </a>
            </li>
            <li>
              <a href="#" className="">
                Vinos
              </a>
            </li>
            <li>
              <a href="restaurante.html" className="">
                Restaurante
              </a>
            </li>
            <li>
              <a href="tienda.html" className="">
                Tienda
              </a>
            </li>
            <li>
              <a href="contacto.html" className="">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
