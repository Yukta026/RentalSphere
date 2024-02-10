import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (
      window.localStorage.getItem("id") &&
      window.localStorage.getItem("id") !== undefined &&
      window.localStorage.getItem("username") &&
      window.localStorage.getItem("username") !== undefined &&
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token") !== undefined
    ) {
      setAuth({
        id: parseInt(window.localStorage.getItem("id")),
        username: window.localStorage.getItem("username"),
        public_hashkey: window.localStorage.getItem("token"),
      });
    }
  }, []);

  useEffect(() => {
    if (auth && auth.id && auth.username && auth.token) {
      window.localStorage.setItem("id", auth.id);
      window.localStorage.setItem("username", auth.username);
      window.localStorage.setItem("token", auth.token);
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
