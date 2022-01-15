import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  async function login() {
    setSigned(true);
  }

  function logout() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed: signed, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;
