import { create } from "zustand";

import {
  createData,
  deleteData,
  getData,
  updateData,
} from "@/api/products/request";
import { LoadingType } from "@/types/globalType";
import { Action, State } from "@/types/products";

export const useProduct = create<State & LoadingType & Action>((set, get) => ({
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

  get: async (params) => {
    set({ is_loading: true });
    try {
      const res: State = await getData({
        page: params?.page ?? get().meta.pagination.page,
        per_page: params?.per_page ?? get().meta.pagination.per_page,
      });
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

  update: async (params) => {
    set({ is_loading: true });
    try {
      const res: State = await updateData(params);
      set({ data: res?.data, meta: res?.meta });
      return res;
    } finally {
      set({ is_loading: false });
    }
  },

  delete: async (params) => {
    set({ is_loading: true });
    try {
      const res: State = await deleteData(params);
      set({ data: res?.data, meta: res?.meta });
      return res;
    } finally {
      set({ is_loading: false });
    }
  },
}));
