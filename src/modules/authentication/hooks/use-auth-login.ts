import type { IResponse } from "@core/types/api.types";
import type { IUser } from "@core/types/user.types";

import HTTPError from "@models/errors/http-error";
import UnauthorizedError from "@models/errors/unauthorized-error";

import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";

import {
  AuthRequest,
  postAuthLogin,
} from "@authentication/apis/auth-login.api";

import { ToastError, ToastSuccess } from "@components/toast/toast";
import { MESSAGES } from "@constants/messages.constant";

import { IUserSchema } from "@core/schema/user.schema";
import { ZodError } from "zod";
import { getAuthActions } from "@authentication/store/auth-store";

export function useAuthLogin() {
  const { setUser } = getAuthActions();

  const mutation = useMutation<IResponse<IUser>, HTTPError, AuthRequest>({
    mutationFn: async (authRequest: AuthRequest) => {
      const res = await postAuthLogin(authRequest);

      if (res.status) {
        const user: IUser = IUserSchema.parse(res.data);
        setUser(user);
      } else {
        throw new UnauthorizedError();
      }

      return res;
    },
    onError: (error: any) => {
      if (error instanceof ZodError) {
        ToastError({
          message: MESSAGES.SCHEMA.ERROR,
        });
      } else {
        ToastError({
          message: error.message ?? MESSAGES.AUTH.ERROR,
        });
      }
    },
    onSuccess: () => {
      ToastSuccess({
        message: MESSAGES.AUTH.SUCCESS,
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
}
