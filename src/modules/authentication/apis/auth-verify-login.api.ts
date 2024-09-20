import type { IResponse } from "@core/types/api.types";

import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints";

// TODO: Benerin ini
async function postAuthVerifyLogin() {
  const res = await apiClient.post<IResponse<void>, void>({
    url: API_ENDPOINTS.AUTH.VERIFY,
    options: {
      credentials: "include",
    },
  });

  return res;
}

export { postAuthVerifyLogin };
