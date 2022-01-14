import React from "react";
import Context from "./DragonContext";
import useLocalStorage from "../hooks/useLocalStorage";

const DragonProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default DragonProvider;
