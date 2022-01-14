import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Header from "../components/Header";
import AddDragon from "../components/AddDragon";
import DragonList from "../components/DragonList";
import EditDragon from "../components/EditDragon";

import useLocalStorage from "../hooks/useLocalStorage";
import DragonContext from "../context/DragonContext";
import GlobalStyle from "../styles/global";
import RoutesPrivate from "./Private/Private";
import { useAuth } from "../context/AuthContext";

const Router = () => {
  const [dragons, setDragons] = useLocalStorage("dragons", []);
  const login = useAuth();

  return (
    <BrowserRouter>
      <Header />

      <DragonContext.Provider value={{ dragons, setDragons }}>
        <Routes>
          <Route element={<App />} exact path="/login" />
          <Route
            path="/"
            element={
              <RoutesPrivate auth={login}>
                <DragonList />
              </RoutesPrivate>
            }
          />
          <Route
            path="/add"
            element={<RoutesPrivate auth={login} component={AddDragon} />}
          />
          <Route
            path="/edit/:id"
            element={
              <RoutesPrivate auth={login}>
                <EditDragon />
              </RoutesPrivate>
            }
          />
        </Routes>
      </DragonContext.Provider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Router;
