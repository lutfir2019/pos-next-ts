import axios, { AxiosError, AxiosResponse } from "axios";
import client from "./client";

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      client.setQueryData(["loading"], true);
      return config;
    },
    (error: AxiosError) => {
      client.setQueryData(["loading"], true);
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      client.setQueryData(["loading"], false);
      return response;
    },
    (error: AxiosError) => {
      client.setQueryData(["loading"], false);
      console.error("Response error:", error);
      if (error.code == "NETWORK_ERROR") {
        client.setQueryData(["notification"], {
          show: true,
          title: "Error",
          message: "Network Error",
          type: "error",
        });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

const api = createAxiosInstance();
export default api;
