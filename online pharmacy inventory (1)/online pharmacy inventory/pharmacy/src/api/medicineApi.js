import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = import.meta.env.VITE_API_URL || "/api/medicines";

export const getMedicines = async () => {
  const response = await axios.get(API_URL, { headers: authHeader() });
  return response.data;
};

export const addMedicine = async (medicine) => {
  const response = await axios.post(API_URL, medicine, { headers: authHeader() });
  return response.data;
};

export const deleteMedicine = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, { headers: authHeader() });
  return response.data;
};
