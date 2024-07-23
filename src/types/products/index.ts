import { MetaType } from "../globalType";

export interface ParamsReq {
  per_page?: number;
  page?: number;
  is_no_soft_loading?: boolean;
}

export type State = {
  data: ProductType[];
  meta: MetaType;
};

export type Action = {
  get: (params?: ParamsReq) => Promise<State>;
  create: (params?: ProductType) => Promise<State>;
  update: (params?: ProductType) => Promise<State>;
  delete: (code: string) => Promise<State>;
};

export type ProductType = {
  id: number | null;
  product_code: string;
  name: string;
  quantity: number;
  price_purchase: number;
  price_selling: number;
  file: string | null;
  created_at?: string;
  updated_at?: string;
};
