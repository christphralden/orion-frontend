import { useMutation } from "@tanstack/react-query";
import {
  AuthRequest,
  AuthResponse,
  IResponse,
  postMessierLogin,
} from "@authentication/apis/messier-login.api";
import HTTPError from "@models/errors/http-error";
import { ToastError, ToastSuccess } from "@components/toast/toast";
import { useCallback } from "react";

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
          message: "Login successful",
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
