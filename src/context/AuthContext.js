import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@Dragon:token");
    const user = localStorage.getItem("@Dragon:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ user, password }) => {
    const token = 1234;
    if (user === "admin" && password === "admin") {
      localStorage.setItem("@Dragon:token", token);
      localStorage.setItem("@Dragon:user", JSON.stringify(user));
    }

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Dragon:token");
    localStorage.removeItem("@Dragon:user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must bee used within an AuhProviver");
  }

  return context;
}

export { AuthProvider, useAuth };
