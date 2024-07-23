import { AxiosError } from "axios";

import { useAuth } from "@/stores/auth/useAuth";
import { useLayout } from "@/stores/useLayout";

interface ErrorResponse {
  message?: string;
  error?: string[];
}

export const handleAxiosError = (err: AxiosError) => {
  let errorMessage = "An unknown error occurred.";
  if (!err.response) {
    errorMessage =
      "There is a problem connecting to the server. Please check your connection or contact us.";
    useLayout.getState().setLayout({
      show: true,
      title: "Network Problem",
      message: errorMessage,
      type: "error",
    });
  } else {
    const status = err.response.status;
    const message = (err.response.data as ErrorResponse).message ?? err.message;
    const error = (err.response.data as ErrorResponse).error || [];

    switch (status) {
      case 400:
        errorMessage = message;
        useLayout.getState().setLayout({
          show: true,
          title: "Caution",
          message,
          type: "warning",
          error,
        });
        break;
      case 401:
        useLayout.getState().setLayout({
          show: true,
          title: "Unauthorized",
          message,
          type: "error",
          error,
        });
        useAuth.getState().signOut();
        break;
      case 403:
        errorMessage = "You do not have permission to perform this action.";
        useLayout.getState().setLayout({
          show: true,
          title: "Access Denied",
          message: errorMessage,
          type: "error",
        });
        break;
      case 404:
        errorMessage = "The requested resource was not found.";
        useLayout.getState().setLayout({
          show: true,
          title: "Not Found",
          message: errorMessage,
          type: "warning",
        });
        break;
      case 500:
        errorMessage =
          "An error occurred on the server. Please try again later.";
        useLayout.getState().setLayout({
          show: true,
          title: "Server Error",
          message: errorMessage,
          type: "error",
        });
        break;
      default:
        errorMessage = message;
        useLayout.getState().setLayout({
          show: true,
          title: "Error",
          message: errorMessage,
          type: "error",
        });
    }
  }

  return { error: true, message: errorMessage };
};
