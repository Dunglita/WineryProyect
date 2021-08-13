import "./css/App.css";
import React, { useState, useEffect } from "react";

//Rutas
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Loader from "./Components/Loader";
import VinoList from "./Components/VinoList";
import AgeCheck from "./Components/AgeCheck";
import Table from "./Components/Table";
import NotFound from "./Components/NotFound";
import Personal from "./Components/Personal";

export default function App() {
  /* funciones del modal */
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  /* fin funciones modal */

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Loader />
          <AgeCheck />
        </Route>
        <Route exact path="/home">
          <Loader />
          <Navbar />
          <Carousel />
          <VinoList />
          <Table />
        </Route>
        <Route path="/personal">
          <Personal />
        </Route>
        <NotFound vinculo={"/home"} />
      </Switch>
      {/* props.children se genera con lo que este entre las etiquetas de apertura y cierre */}
    </BrowserRouter>
  );
}
