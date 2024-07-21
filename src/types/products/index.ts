import { LoadingType, Pagination, Response } from "../globalType";

export interface ParamsReq {
  limit?: number;
  skip?: number;
  is_no_soft_loading?: boolean;
}

export interface State extends LoadingType {
  data: ProductType[];
  meta: { pagination: Pagination };
}

export type Action = {
  getProduct: (params?: ParamsReq) => Promise<Response<Product>>;
  submitProduct: (params?: ProductType) => Promise<ProductType[]>;
};

export interface Product {
  products: Data[];
  total: number;
  skip: number;
  limit: number;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export type ProductType = {
  id: number | null;
  product_code?: string;
  name: string;
  quantity: number;
  price_selling: number;
  price_purchase: number;
  file: string | null;
  created_at?: string;
};
