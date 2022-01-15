import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const RoutesPrivate = ({ children }) => {
  const authentication = useAuth();
  
  const authed = authentication.signed;

  return authed ? children : <Navigate to="/login" />;
};

export default RoutesPrivate;
