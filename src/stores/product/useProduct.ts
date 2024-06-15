import { create } from "zustand";
import { fetchProducts } from "@/api/product/request";
import { Action, Product, State } from "@/types/product";
import { Response } from "@/types/globalType";

export const useProduct = create<State & Action>((set) => ({
  is_loading: false,
  is_soft_loading: false,
  data: [],
  error: null,
  getProduct: async (params): Promise<Response<Product[]>> => {
    set({ is_loading: true, is_soft_loading: true });
    try {
      const res = await fetchProducts({ limit: params?.limit ?? 10 });
      set({ data: res.data.products });
      return res;
    } catch (error: any) {
      console.error("Failed to request: ", error);
      set({ error });
      return error;
    } finally {
      set({ is_loading: false, is_soft_loading: false });
    }
  },
}));
