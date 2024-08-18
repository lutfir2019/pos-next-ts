import { MetaType } from "../globalType";

export type State = {
  data: OrderItem[];
  meta: MetaType;
};

export type Action = {
  get: () => Promise<State>;
  create: (payload: OrderType) => Promise<State>;
};
export type OrderType = {
  total: number;
  items: OrderItem[];
};

export type OrderItem = {
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
};
