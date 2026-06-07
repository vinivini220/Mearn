import axios from "axios";

const API_URL = "/api/medicines";

export const fetchMedicines = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch medicines.";
    throw new Error(message);
  }
};

export const addMedicine = async (medicineData) => {
  try {
    const response = await axios.post(API_URL, medicineData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to add medicine.";
    throw new Error(message);
  }
};

export const updateMedicine = async (id, medicineData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, medicineData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to update medicine.";
    throw new Error(message);
  }
};

export const deleteMedicine = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to delete medicine.";
    throw new Error(message);
  }
};
