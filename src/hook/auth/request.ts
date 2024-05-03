import { Auth, AuthToken } from "@/types/auth";
import axiosInstance from "@/utils/axios";

export const postLogin = async (parmas: Auth): Promise<AuthToken> =>
  await axiosInstance.post("/auth/login", parmas);
