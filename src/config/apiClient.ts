import axios from "axios";
import { VITE_API_URL } from "../lib/env";

const options = {
  baseURL: VITE_API_URL,
  withCredentials: true,
}

const API = axios.create(options);

API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { status, data } = error.response;
    return Promise.reject({status, ...data});
  }
);

export default API;