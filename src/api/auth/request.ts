import axios from "@/lib/axios";
import { Auth, SignInType } from "@/types/auth";

export const postLogin = async (payload: SignInType) => {
  return axios.post<Auth>("auth/login", payload);
};
