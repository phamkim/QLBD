import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: window.sessionStorage.getItem("token"),
  },
};

const API = axios.create({
  baseURL: process.env.BASE_URL,
});

export { API, config };
