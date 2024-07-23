import axios from "@/lib/axios";
import { ParamsReq, ProductType } from "@/types/products";

export const getData = async (params?: ParamsReq) => {
  const res = await axios.get("/product/get-products", { params });
  return res?.data;
};

export const createData = async (payload?: ProductType) => {
  const res = await axios.post("/product/create-product", payload);
  return res?.data;
};

export const updateData = async (payload?: ProductType) => {
  const res = await axios.put(
    `/product/${payload?.product_code}/update-product`,
    payload
  );
  return res?.data;
};

export const deleteData = async (code: string) => {
  const res = await axios.delete(
    `/product/${code}/delete-product`
  );
  return res?.data;
};
