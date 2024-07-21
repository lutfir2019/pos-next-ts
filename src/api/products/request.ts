import { ParamsReq, ProductType } from "@/types/products";
import axios from "@/lib/axios";

export const getProducts = async (params?: ParamsReq) => {
  const res = await axios.get("/product", { params });
  return res?.data;
};

export const submitProduct = async (payload?: ProductType) => {
  const res = await axios.post("/product", payload);
  return res?.data;
};
