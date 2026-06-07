import axios from "axios";

const API_URL = "/api/reports";

export const fetchReports = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch reports.";
    throw new Error(message);
  }
};

export const generateReport = async (params) => {
  try {
    const response = await axios.post(API_URL, params);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to generate report.";
    throw new Error(message);
  }
};
