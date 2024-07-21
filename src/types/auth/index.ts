import { LoadingType } from "../globalType";

export type Auth = {
  data: Data;
  message: string;
  status: string;
  token: string;
};

export type Data = {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  email: string;
  name: string;
  role: string;
};

export type SignInType = {
  email: string;
  password: string;
};

export interface State extends LoadingType {
  data: Auth | null;
}

export type Action = {
  login: (payload: SignInType) => Promise<Auth>;
  signOut: () => void;
  getToken: () => string;
};
