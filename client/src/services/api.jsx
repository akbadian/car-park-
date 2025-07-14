import axios from "axios";

const API_BASE = "http://localhost:5000/api";
const api = axios.create({ baseURL: API_BASE });

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default api;

