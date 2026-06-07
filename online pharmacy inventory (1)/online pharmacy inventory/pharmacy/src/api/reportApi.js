import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = import.meta.env.VITE_API_URL || "/api/reports";

export const getReports = async () => {
  const response = await axios.get(API_URL, { headers: authHeader() });
  return response.data;
};
