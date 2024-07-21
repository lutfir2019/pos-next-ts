import { submitUser } from "@/api/users/request";
import { Action, State } from "@/types/users";
import { create } from "zustand";

export const useUser = create<State & Action>((set) => ({
  data: {},
  is_loading: false,
  is_soft_loading: false,
  submitUser: async (params) => {
      set(({ is_soft_loading: true }));
      try {
        const res = await submitUser(params);
        set({ data: res?.data?.data });
        return res?.data;
      } finally {
        set({ is_loading: false, is_soft_loading: false });
      }
  },
}));
