import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginModal(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                value={usuario}
                onChange={handleUsuarioChange}
                placeholder=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder=""
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleModalClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAceptarClick}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
