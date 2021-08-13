import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
export default function VinoCard(props) {
  const imgUrl = `http://localhost:8000/images/${props.imagen}`;

  const imgStyle = {
    height: "35vh",
    objectFit: "contain",
  };
  return (
    <Col className="my-4">
      <Card className="h-100">
        <Card.Img style={imgStyle} variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{props.tittle}</Card.Title>

          <Button variant="info">Ver mas</Button>
        </Card.Body>
        <Card.Footer className="text-muted">${props.precio}</Card.Footer>
      </Card>
    </Col>
  );
}
