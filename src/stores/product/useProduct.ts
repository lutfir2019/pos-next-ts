import { create } from "zustand";
import { getProducts, submitProduct } from "@/api/products/request";
import { Action, Product, State } from "@/types/products";
import { Response } from "@/types/globalType";

export const useProduct = create<State & Action>((set) => ({
  data: [],
  is_soft_loading: false,
  is_loading: false,
  error: null,
  meta: {
    pagination: {
      page: 0,
      per_page: 10,
      total: 0,
      total_pages: 0,
    },
  },

  getProduct: async (params): Promise<Response<Product>> => {
    set({ is_loading: true, is_soft_loading: !params?.is_no_soft_loading });
    try {
      const res = await getProducts({
        limit: params?.limit ?? 10,
        skip: params?.skip,
      });
      set({ data: res.data });
      return res?.data;
    } finally {
      set({ is_loading: false, is_soft_loading: false });
    }
  },

  submitProduct: async (params) => {
    set({ is_loading: true, is_soft_loading: true });
    try {
      const res = await submitProduct(params);
      set({ data: res?.data });
      console.log(res)
      return res?.data;
    } finally {
      set({ is_loading: false, is_soft_loading: false });
    }
  },
}));
