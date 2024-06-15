import { AxiosError } from "axios";
import { LoadingType, Response } from "../globalType";

export type Auth = {
  unm?: string;
  pass?: string;
};

export interface AuthToken extends Auth {
  message?: string;
  token?: string;
}

export interface State extends LoadingType {
  data: AuthToken;
  error: AxiosError<{ message: string }> | null;
}

export type Action = {
  login: (payload: Auth) => Promise<Response<AuthToken>>;
};
