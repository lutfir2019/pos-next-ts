import { useMutation } from "@tanstack/react-query";
import { postLogin } from "./request";
import { AxiosError } from "axios";

export const Login = () => {
  return useMutation({
    mutationFn: postLogin,
    onError(error: AxiosError<Error>, variables, context) {
      console.error(error);
    },
    onSuccess(data, variables, context) {
      console.log(data);
    },
  });
};
