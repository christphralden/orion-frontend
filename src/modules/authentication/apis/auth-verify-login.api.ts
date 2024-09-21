import type { IResponse } from "@core/types/api.types";

import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints";
import { IUser } from "@core/types/user.types";

async function postAuthVerifyLogin() {
  const res = await apiClient.get<IResponse<IUser>>({
    url: API_ENDPOINTS.AUTH.VERIFY,
    options: {
      credentials: "include",
    },
  });

  return res;
}

export { postAuthVerifyLogin };
