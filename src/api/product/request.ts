import { ParamsReq } from "@/types/product";
import axiosInstance from "@/utils/axios";

export const fetchProducts = async (params?: ParamsReq) =>
  await axiosInstance.get("https://dummyjson.com/products", { params });
