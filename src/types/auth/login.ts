import { LoadingType } from "../globalType";

import { RegisterType } from "./register";

export type Auth = {
  data: Data;
  message: string;
  status: string;
  token: string;
};

export type Data = {
  id: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  username: string;
  name: string;
  role: string;
};

export type SignInType = {
  username: string;
  password: string;
};

export interface State extends LoadingType {
  data: Auth | null;
}

export type Action = {
  login: (payload: SignInType) => Promise<Auth>;
  register: (payload: RegisterType) => Promise<{ message: string; data: null }>;
  signOut: () => void;
  getToken: () => string;
  getUser: () => Data;
  setUser: (data: Data) => void;
};
