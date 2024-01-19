// lib/api.js
import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "/",
});

export type ApiConfig = AxiosRequestConfig;

export default apiClient;
