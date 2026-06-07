import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = import.meta.env.VITE_API_URL || "/api/sales";

export const getSales = async () => {
  const response = await axios.get(API_URL, { headers: authHeader() });
  return response.data;
};

export const createSale = async (sale) => {
  const response = await axios.post(API_URL, sale, { headers: authHeader() });
  return response.data;
};
