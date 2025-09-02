import axios from "axios";

// Create an axios instance with default settings
const axios_instance = axios.create({
  baseURL:"http://localhost:3000/v1", // Backend API URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Needed if backend uses cookies/session
});

export { axios_instance };
