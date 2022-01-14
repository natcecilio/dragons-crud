import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const RoutesPrivate = ({ children, auth }) => {
  const { user } = useAuth();

  console.log({user})

  return user ? children : <Navigate to="/login" />;
};

export default RoutesPrivate;
