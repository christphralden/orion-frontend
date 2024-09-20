import type { IResponse } from "@core/types/api.types";

import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";

import {
  AuthRequest,
  postAuthLogin,
} from "@authentication/apis/auth-login.api";

import HTTPError from "@models/errors/http-error";
import { ToastError, ToastSuccess } from "@components/toast/toast";
import { MESSAGE } from "@constants/messages";
import { IUser } from "@core/types/user.types";

import { useAuthStore } from "@authentication/store/auth-store";

export const useAuthLogin = () => {
  const { setUser } = useAuthStore();

  const mutation = useMutation<IResponse<IUser>, HTTPError, AuthRequest>({
    mutationFn: (authRequest: AuthRequest) => postAuthLogin(authRequest),
    onError: (error: any) => {
      ToastError({
        message: error.message,
      });
    },
    onSuccess: (res: IResponse<IUser>) => {
      setUser({
        name: "Bintang Halim",
      });

      ToastSuccess({
        message: MESSAGE.LOGIN_SUCCESS,
      });
    },
  });

  const handleLogin = useCallback(
    (authRequest: AuthRequest) => mutation.mutate(authRequest),
    [mutation],
  );

  return {
    ...mutation,
    handleLogin,
  };
};
