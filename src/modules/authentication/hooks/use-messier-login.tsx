import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { MESSAGE } from "@constants/messages";

import {
  AuthRequest,
  AuthResponse,
  IResponse,
  postMessierLogin,
} from "@authentication/apis/messier-login.api";
import HTTPError from "@models/errors/http-error";
import { ToastError, ToastSuccess } from "@components/toast/toast";

export const useMessierLogin = () => {
  const mutation = useMutation<IResponse<AuthResponse>, HTTPError, AuthRequest>(
    {
      mutationFn: (authRequest: AuthRequest) => postMessierLogin(authRequest),
      onError: (error: any) => {
        ToastError({
          message: error.message,
        });
      },
      onSuccess: () => {
        ToastSuccess({
          message: MESSAGE.LOGIN_SUCCESS,
        });
      },
    },
  );

  const handleLogin = useCallback(
    (authRequest: AuthRequest) => mutation.mutate(authRequest),
    [mutation],
  );

  return {
    ...mutation,
    handleLogin,
  };
};
