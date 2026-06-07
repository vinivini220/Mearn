import axios from "axios";

const API_URL = "/api/sales";

export const fetchSales = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch sales data.";
    throw new Error(message);
  }
};

export const createSale = async (saleData) => {
  try {
    const response = await axios.post(API_URL, saleData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to create sale.";
    throw new Error(message);
  }
};
