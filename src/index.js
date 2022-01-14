import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <Router />
  </AuthProvider>,
  document.getElementById("root")
);
