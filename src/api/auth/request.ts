import axios from "@/lib/axios";
import { SignInType } from "@/types/auth/login";
import { RegisterType } from "@/types/auth/register";

export const submitLogin = async (payload: SignInType) => {
  return axios.post("auth/login", payload);
};

export const submitRegister = async (payload: RegisterType) => {
  return axios.post("auth/register", payload);
};
