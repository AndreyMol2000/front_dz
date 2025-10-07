import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) setUser({ username, token });
  }, []);

  const loginUser = (username, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setUser({ username, token });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  };

  return { user, loginUser, logoutUser };
};
