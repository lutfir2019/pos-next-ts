import { create } from "zustand";

import { LoadingType } from "@/types/globalType";
import { Action, State } from "@/types/menu";
import { createData, getData } from "@/api/menu/request";

export const useMenu = create<State & LoadingType & Action>((set, get) => ({
  data: [],
  is_loading: false,
  error: null,
  meta: {
    pagination: {
      page: 1,
      per_page: 10,
      total: 0,
      total_pages: 0,
    },
  },

  get: async () => {
    set({ is_loading: true });
    try {
      const res: State = await getData();
      set({ data: res?.data, meta: res?.meta });
      return res;
    } finally {
      set({ is_loading: false });
    }
  },

  create: async (params) => {
    set({ is_loading: true });
    try {
      const res: State = await createData(params);
      set({ data: res?.data, meta: res?.meta });
      return res;
    } finally {
      set({ is_loading: false });
    }
  },
}));
