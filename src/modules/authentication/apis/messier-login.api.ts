import type { IResponse } from "@core/types/api.types";
import type { JWTToken } from "@authentication/types/cookie.types";

import apiClient from "@core/apis/api-client";
import { API_KEYS } from "@constants/api-endpoints";

type AuthRequest = {
  username: string;
  password: string;
};

async function postMessierLogin({ username, password }: AuthRequest) {
  const res = await apiClient.post<AuthRequest, IResponse<JWTToken>>({
    url: API_KEYS.AUTH.LOGIN,
    data: {
      username: username,
      password: password,
    },
    options: {
      credentials: "include",
    },
  });

  return res;
}

export { postMessierLogin };
export type { AuthRequest };
