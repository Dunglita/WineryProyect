import React from "react";
import "../css/SideMenuAdmin.css";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
export default function SideMenuAdmin(props) {
  return (
    <>
      <div id="wraper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h4>EA Admin</h4>
          </div>
          <ul className="list-unstyled components">
            <p>Home </p>
            <li className="">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                Usuarios
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Ver</a>
                </li>
                <li>
                  <a href="#">Crear</a>
                </li>
                <li>
                  <a href="#">Borar</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Bodega">Bodega</a>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                Vinos
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Page 1</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/personal/empleados">Empleados</a>
            </li>
            <li>
              <a href="/personal/restaurante">Restaurante</a>
            </li>
            <li className="sesionLink">
              <a
                href="#vinoSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                {props.userInfo}
              </a>
              <ul className="collapse list-unstyled" id="vinoSubmenu">
                <li>
                  <a href="#">Mi cuenta</a>
                </li>
                <li>
                  <a onClick={props.handleLogout} href="#">
                    Cerrar Sesion
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
