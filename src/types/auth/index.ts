export type Auth = {
  email?: string;
  password?: string;
};

export interface AuthToken extends Auth {
  message?: string;
  token?: string;
}