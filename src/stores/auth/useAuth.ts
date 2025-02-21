import Cookies from "js-cookie";
import { create } from "zustand";

import { submitLogin, submitRegister } from "@/api/auth/request";
import { navigate } from "@/composables/navigate";
import { Action, Auth, State } from "@/types/auth/login";

export const useAuth = create<State & Action>((set, get) => ({
  data: null,
  is_loading: false,
  login: async (state) => {
    set({ is_loading: true });
    try {
      const res = await submitLogin(state);
      const token = res?.data?.token;

      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(res?.data?.data));

      set({ data: res?.data });
      navigate("/pages");
      return res?.data;
    } finally {
      set({ is_loading: false });
    }
  },

  register: async (state) => {
    set({ is_loading: true });
    try {
      const res = await submitRegister(state);
      return res?.data;
    } finally {
      set({ is_loading: false });
    }
  },

  signOut: () => {
    set({ data: null });
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/auth");
  },

  getToken: () => {
    const { data } = get();
    const token = "Bearer " + (data?.token ?? Cookies.get("token"));
    return token ?? "";
  },

  getUser: () => {
    const { data } = get();
    let user: any = data?.data;
    const cookie = Cookies.get("user");

    if (
      !user &&
      typeof cookie === "string" &&
      cookie.startsWith("{") &&
      cookie.endsWith("}")
    )
      user = JSON.parse(cookie ?? "");

    return user;
  },

  setUser: (newdata) => {
    const { data } = get();
    const { token, message, status } = data as Auth;
    set({
      data: {
        token,
        message,
        status,
        data: newdata,
      },
    });
  },
}));
