import type { IResponse } from "@core/types/api.types";
import type { IUser } from "@core/types/user.types";

import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

async function getAuthVerifyLogin() {
  const res = await apiClient.get<IResponse<IUser>>({
    url: API_ENDPOINTS.AUTH.VERIFY,
    options: {
      credentials: "include",
    },
  });

  return res;
}

export { getAuthVerifyLogin };
