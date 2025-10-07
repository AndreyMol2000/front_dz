import axios from "axios";

const API_URL = "http://localhost:8000"; // ваш FastAPI сервер

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { username: email, password });
  return response.data;
};

export const getStudents = async (token) => {
  const response = await axios.get(`${API_URL}/students`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
