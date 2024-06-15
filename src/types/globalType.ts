import { AxiosError, AxiosResponse } from "axios";

export type LoadingType = {
  is_loading?: boolean;
  is_soft_loading?: boolean;
};

export type Response<T = any> = AxiosResponse<T> | AxiosError;
