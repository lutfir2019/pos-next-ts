import axios, { AxiosError, AxiosResponse } from "axios";
import { useLoading } from "@/stores/useLoading";
import { useLayout } from "@/stores/useLayout";

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      useLoading.getState().setLoading({ is_loading: true });
      return config;
    },
    (error: AxiosError) => {
      useLoading.getState().setLoading({ is_loading: true });
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      useLoading.getState().setLoading({ is_loading: false });
      return response;
    },
    (error: AxiosError) => {
      useLoading.getState().setLoading({ is_loading: false });
      console.error("Response error:", error);
      if (error.code == "NETWORK_ERROR") {
        useLayout.getState().setLayout({
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
