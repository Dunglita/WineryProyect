import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Carousel.css";
export default function Carrousel() {
  return (
    <div>
      <Carousel fade interval={6000} pause={false} indicators={false}>
        <Carousel.Item id="slide1" className="slides">
          <Carousel.Caption>
            <h1>Espiritu Animal</h1>
            <p>Haciendo nuestra la tierra desde 2021.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="slide2" className="slides">
          <Carousel.Caption>
            <h2>Nuestros Viñedos</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="slide3" className="slides">
          <Carousel.Caption>
            <h1>La Bodega</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
