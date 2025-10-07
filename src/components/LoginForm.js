import { useState } from "react";
import { loginApi } from "../api";

export const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Введите корректный email");
      return;
    }
    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }
    try {
      const data = await loginApi(email, password); // возвращает {access_token: "..."}
      onLogin(email, data.access_token);
    } catch {
      setError("Ошибка авторизации");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Войти</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  );
};
