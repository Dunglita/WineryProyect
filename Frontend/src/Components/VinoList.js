import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import VinoCard from "./VinoCard";
import "../css/VinoList.css";
export default function VinoList() {
  const [vinos, setVinos] = useState([]);
  useEffect(getVinos, []);

  async function getVinos() {
    const url = "http://localhost:8000/vinos";
    const response = await fetch(url);
    const data = await response.json();
    setVinos(data);
  }

  function getCards() {
    const cards = vinos.map((vino) => {
      return (
        <VinoCard
          tittle={vino.nombre}
          imagen={vino.imagen}
          precio={vino.precio}
        />
      );
    });
    return cards;
  }

  return (
    <>
      <div id="vinolist">
        <h2>Vinos</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
          {getCards()}
        </Row>
      </div>
    </>
  );
}
