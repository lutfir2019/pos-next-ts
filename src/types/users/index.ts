import { DefaultType, LoadingType } from "../globalType";

export type SignUpType = {
  username: string;
  password: string;
  passwordConfirm: string;
  name: string;
  role: string;
};

export interface State extends LoadingType {
  data: SignUpType | DefaultType;
}

export type Action = {
  submitUser: (params: SignUpType) => Promise<SignUpType>;
};
