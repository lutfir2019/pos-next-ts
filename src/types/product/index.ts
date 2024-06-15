import { AxiosError } from "axios";
import { LoadingType, Response } from "../globalType";
export interface ProductResponse {
  products?: Product[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface Product {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

export interface ParamsReq {
  limit?: number;
}

export interface State extends LoadingType {
  data: Product[];
  error: AxiosError | null;
}

export type Action = {
  getProduct: (params?: ParamsReq) => Promise<Response<Product[]>>;
};
