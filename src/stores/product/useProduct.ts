import { create } from "zustand";
import { getProducts } from "@/api/product/request";
import { Action, Product, State } from "@/types/product";
import { Response } from "@/types/globalType";

export const useProduct = create<State & Action>((set) => ({
  is_loading: false,
  is_soft_loading: false,
  data: {} as Product,
  error: null,
  getProduct: async (params): Promise<Response<Product>> => {
    set({ is_loading: true, is_soft_loading: !params?.is_no_soft_loading });
    try {
      const res = await getProducts({
        limit: params?.limit ?? 10,
        skip: params?.skip,
      });
      set({ data: res.data });
      return res?.data;
    } catch (error: any) {
      console.error("Failed to request: ", error);
      set({ error });
      return error;
    } finally {
      set({ is_loading: false, is_soft_loading: false });
    }
  },
}));
