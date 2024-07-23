import Cookies from "js-cookie";
import { create } from "zustand";

import { submitLogin, submitRegister } from "@/api/auth/request";
import { Action, State } from "@/types/auth/login";

export const useAuth = create<State & Action>((set, get) => ({
  data: null,
  is_loading: false,
  is_soft_loading: false,
  login: async (state) => {
    set({ is_loading: true, is_soft_loading: true });
    try {
      const res = await submitLogin(state);
      const token = res?.data?.token;
      Cookies.set("token", token);
      set({ data: res?.data });
      window.location.href = "/pages";
      return res?.data;
    } finally {
      set({ is_loading: false, is_soft_loading: false });
    }
  },

  register: async (state) => {
    set({ is_loading: true, is_soft_loading: true });
    try {
      const res = await submitRegister(state);
      return res?.data
    } finally {
      set({ is_loading: false, is_soft_loading: false });
    }
  },

  signOut: () => {
    set({ data: null });
    Cookies.remove("token");
    window.location.href = "/auth/";
  },

  getToken: () => {
    const { data } = get();
    const token = "Bearer " + (data?.token ?? Cookies.get("token"));
    return token ?? "";
  },
}));
