import axios from "@/lib/axios";
import { OrderType } from "@/types/menu";

export const getData = async () => {
  const res = await axios.get("/product/get-products");
  return res?.data;
};

export const createData = async (payload: OrderType) => {
  const res = await axios.post("/order/create-product", payload);
  return res?.data;
};
