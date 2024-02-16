import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (
      window.localStorage.getItem("email") &&
      window.localStorage.getItem("email") !== undefined &&
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token") !== undefined
      // &&
      // window.localStorage.getItem("role") &&
      // window.localStorage.getItem("role") !== undefined
    ) {
      setAuth({
        email: window.localStorage.getItem("email"),
        token: window.localStorage.getItem("token"),
        // role: window.localStorage.getItem("role"),
      });
    }
  }, []);

  useEffect(() => {
    if (auth && auth.email && auth.token) {
      window.localStorage.setItem("email", auth.email);
      window.localStorage.setItem("token", auth.token);
      // window.localStorage.setItem("role", auth.role);
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
