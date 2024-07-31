export type SignUpType = {
  username: string;
  password: string;
  passwordConfirm: string;
  name: string;
  role: string;
};

export type Data = {
  id: number;
  username: string;
  name: string;
  role: string;
};

export type State = {
  data: Data | null;
  is_loading?: boolean;
};

export type Action = {
  submitUser: (payload: SignUpType) => Promise<Data>;
  updateUser: (payload: UserSetting) => Promise<State>;
  getSelf: () => Promise<Data>;
};

export type UserSetting = {
  id?: number;
  role?: string;
  name: string;
  username: string;
  currentPassword: string;
  password: string;
  passwordConfirm: string;
};
