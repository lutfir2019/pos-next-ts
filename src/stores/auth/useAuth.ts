import { postLogin } from "@/api/auth/request";
import { Action, AuthToken, State } from "@/types/auth";
import { Response } from "@/types/globalType";
import { create } from "zustand";

export const useAuth = create<State & Action>((set) => ({
  data: {},
  is_loading: false,
  is_soft_loading: false,
  error: null,
  login: async (state) => {
    set({ is_loading: true, is_soft_loading: true });
    try {
      const res: Response<{ data: AuthToken }> = await postLogin(state);
      set({ data: res.data?.data });
      return res;
    } catch (error: any) {
      console.error("Failed to request:", error);
      set({ error });
      return error;
    } finally {
      set({ is_loading: false, is_soft_loading: false });
    }
  },
}));
