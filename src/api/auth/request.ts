import { Auth } from "@/types/auth";
import axiosInstance from "@/utils/axios";

export const postLogin = async (parmas: Auth) =>
  await axiosInstance.post("/auth/login", parmas);
