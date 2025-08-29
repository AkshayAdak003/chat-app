import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://chat-app-3-5anc.onrender.com/api",
//baseURL: "https://chat-app-3-5anc.onrender.com",
  withCredentials: true,
});