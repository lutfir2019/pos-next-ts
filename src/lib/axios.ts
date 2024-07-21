import axios, { AxiosError, AxiosResponse } from "axios";
import { useLoading } from "@/stores/useLoading";
import { handleAxiosError } from "@/composables/handleError";
import { useAuth } from "@/stores/auth/useAuth";

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
      let token = useAuth.getState().getToken();
      if (token) {
        config.headers["Authorization"] = `${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      useLoading.getState().setLoading({ is_loading: true });
      console.error("Request error:", error);
      handleAxiosError(error)
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
      handleAxiosError(error)
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

const api = createAxiosInstance();
export default api;
