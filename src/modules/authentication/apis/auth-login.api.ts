import type { IResponse } from "@core/types/api.types";
import type { IUser } from "@core/types/user.types";

import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints";

type AuthRequest = {
  username: string;
  password: string;
};

async function postAuthLogin({ username, password }: AuthRequest) {
  const res = await apiClient.post<IResponse<IUser>, AuthRequest>({
    url: API_ENDPOINTS.AUTH.LOGIN,
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

export { postAuthLogin };
export type { AuthRequest };
