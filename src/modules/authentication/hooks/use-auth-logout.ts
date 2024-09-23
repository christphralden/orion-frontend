import type { IResponse } from "@core/types/api.types";

import HTTPError from "@models/errors/http-error";

import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";

import { getAuthLogout } from "@authentication/apis/auth-logout.api";

import { ToastError, ToastSuccess } from "@components/toast/toast";
import { MESSAGES } from "@constants/messages";

import { getAuthActions } from "@authentication/store/auth-store";

export function useAuthLogout() {
  const { clearAuthState } = getAuthActions();

  const mutation = useMutation<IResponse<string>, HTTPError, void>({
    mutationFn: async () => {
      const res = await getAuthLogout();

      if (res.status) {
        clearAuthState();
      }

      return res;
    },
    onError: (error: any) => {
      ToastError({
        message: error.message ?? MESSAGES.AUTH.ERROR,
      });
    },
    onSuccess: (data: IResponse<string>) => {
      ToastSuccess({
        message: data.message ?? MESSAGES.AUTH.LOGOUT,
      });
    },
  });

  const handleLogout = useCallback(() => mutation.mutate(), [mutation]);

  return {
    ...mutation,
    handleLogout,
  };
}
