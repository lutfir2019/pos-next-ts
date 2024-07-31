import { create } from "zustand";

import Cookies from "js-cookie";

import { getSelf, submitUser, updateUser } from "@/api/users/request";
import { Action, State } from "@/types/users";

export const useUser = create<State & Action>((set) => ({
  data: null,
  is_loading: false,
  submitUser: async (payload) => {
    set({ is_loading: true });
    try {
      const res = await submitUser(payload);
      set({ data: res?.data?.data });
      return res?.data;
    } finally {
      set({ is_loading: false });
    }
  },

  updateUser: async (payload) => {
    set({ is_loading: true });
    try {
      const res: State = await updateUser(payload);
      Cookies.set("user", res?.data?.name ?? "");
      set({ data: res?.data });
      return res;
    } finally {
      set({ is_loading: false });
    }
  },

  getSelf: async () => {
    set({ is_loading: true });
    try {
      const res = await getSelf();
      set({ data: res?.data?.data });
      return res?.data;
    } finally {
      set({ is_loading: false });
    }
  },
}));
