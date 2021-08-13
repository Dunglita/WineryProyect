import React, { useState } from "react";
import "../css/LogInAdmin.css";
import login from "../Assets/Imagenes/login/logsmall.PNG";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
export default function LogInAdmin(props) {
  /* Overflow Hide*/
  window.onload = function () {
    disableScroll();
  };
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  }
  /* Termina OverflowHide*/
  const [usuario, setUsuario] = useState("");
  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAceptarClick = () => {
    props.handleLogin(usuario, password);
  };

  return (
    <div className="wrapper">
      <div id="form-content">
        <h2>Hola!</h2>
        <h5>Accede a tu cuenta desde aqui.</h5>
        <Row>
          <Col>
            {" "}
            <img src={login} alt="" id="curve" />
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>
                  <h5>Usuario</h5>
                </Form.Label>
                <Form.Control
                  id="curve"
                  type="text"
                  value={usuario}
                  onChange={handleUsuarioChange}
                  placeholder=""
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5>Password</h5>
                </Form.Label>
                <Form.Control
                  id="curve"
                  type="password"
                  onChange={handlePasswordChange}
                  value={password}
                  placeholder=""
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAceptarClick} id="curve">
                Ingresar
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <div class="bg_color"></div>
      <div class="wave w1"></div>
      <div class="wave w2"></div>
    </div>
  );
}
