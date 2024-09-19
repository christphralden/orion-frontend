import { useMutation } from "@tanstack/react-query";
import {
  AuthRequest,
  AuthResponse,
  IResponse,
  postMessierLogin,
} from "@authentication/apis/messier-login.api";
import HTTPError from "@models/errors/http-error";
import { ToastError } from "@components/toast/toast";

export const useMessierLogin = () => {
  return useMutation<IResponse<AuthResponse>, HTTPError, AuthRequest>({
    mutationFn: (authRequest: AuthRequest) => postMessierLogin(authRequest),
    onError: (error: any) => {
      ToastError({
        message: error.message,
      });
    },
  });
};
