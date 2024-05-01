import { useMutation } from "@tanstack/react-query";
import { postLogin } from "./request";
import { AxiosError } from "axios";

interface LoginProps {
  onSuccess?: () => void;
  onError?: () => void;
}
export const useLogin = (props?: LoginProps) =>
  useMutation({
    mutationFn: postLogin,
    onError(error: AxiosError<Error>, variables, context) {
      console.error(error);
    },
    ...props,
  });
