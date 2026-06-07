import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "/api/auth";

export const loginAdmin = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
