import { AxiosError, AxiosResponse } from "axios";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons/lib";

export type LoadingType = {
  is_loading?: boolean;
  is_soft_loading?: boolean;
};

export type Response<T = any> = AxiosResponse<T> | AxiosError;

export type IconsType =
  | IconType
  | ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
