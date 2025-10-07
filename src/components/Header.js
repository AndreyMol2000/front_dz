import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const Header = () => {
  const { user, logout } = useAuth();
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <header>
      {user ? <span>Привет, {user.username}</span> : <span>Не авторизован</span>}
      <span style={{marginLeft: "20px"}}>{online ? "Онлайн" : "Вы в офлайне"}</span>
      {user && <button onClick={logout}>Выйти</button>}
    </header>
  );
};
