import { ParamsReq } from "@/types/product";
import axios from "@/lib/axios";

export const getProducts = async (params?: ParamsReq) =>
  await axios.get("/products", { params });
