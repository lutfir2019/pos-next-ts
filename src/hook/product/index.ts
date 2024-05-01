import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./request";
import { ParamsReq } from "@/types/product";

export const useProduct = (params?: ParamsReq) =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts({ limit: params?.limit ?? 10 }),
  });
