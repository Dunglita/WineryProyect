import React, { useState, useEffect } from "react";
import SideMenuAdmin from "./SideMenuAdmin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogInAdmin from "./LogInAdmin";
import NotFound from "./NotFound";
import AdminPage from "./AdminPage";
import "../css/AdminPage.css";
export default function Personal(props) {
  const handleLogin = async (usuario, password) => {
    const url = "http://localhost:8000/sesion";

    const params = {
      usuario,
      password,
    };
    const response = await fetch(url, {
      method: `post`,
      body: JSON.stringify(params),
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    if (response.status === 200) {
      handleUpdateUser({ name: data.data.name });
    } else {
      alert(data.mensaje);
    }
  };

  const handleLogout = async () => {
    const url = "http://localhost:8000/sesion";

    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });

    const data = response.json();

    if (response.status === 200) {
      handleUpdateUser(null);
    } else {
      alert(data.message);
    }
  };

  const [user, setUser] = useState(null);

  const handleUpdateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(checkUser, []);
  function checkUser() {
    const url = "http://localhost:8000/sesion/check";
    fetch(url, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        handleUpdateUser(data.data);
      });
  }

  const [userInfo, setUserInfo] = useState(null);
  function handleLoadUserInfo(userInfo) {
    setUserInfo(userInfo);
  }

  const handleCall = async () => {
    const userId = user;
    console.log("");
    console.log(userId);
    const url = `http://localhost:8000/empleado/${userId}`;

    const response = await fetch(url);
    const data = await response.json();
    if (response.status === 200) {
      handleLoadUserInfo({ info: data.data });
    } else {
      console.log("se mufo esta gilada");
    }
  };
  useEffect(getUserInfo, []);

  function getUserInfo() {
    handleCall();
  }

  return (
    <>
      {user ? (
        <BrowserRouter>
          <Switch>
            <Route exact path="/personal">
              <div id="contenido">{user}</div>
              <SideMenuAdmin userInfo={userInfo} handleLogout={handleLogout} />
              <AdminPage />
            </Route>
            <NotFound vinculo={"/personal"} />
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route exact path="/personal">
              <LogInAdmin handleLogin={handleLogin} />
            </Route>
            <NotFound vinculo={"/personal"} />
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}
