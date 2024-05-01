import { ParamsReq, ProductResponse } from "@/types/product";
import { axiosInstance } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const fetchProducts = async (
  params?: ParamsReq
): Promise<AxiosResponse<ProductResponse>> =>
  await axiosInstance.get("https://dummyjson.com/products", {
    params: params,
  });
