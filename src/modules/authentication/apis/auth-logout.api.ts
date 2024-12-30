import type { IResponse } from "@core/types/api.types";

import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

async function getAuthLogout() {
  return apiClient.get<IResponse<string>>({
    url: API_ENDPOINTS.AUTH.LOGOUT,
    options: {
      credentials: "include",
    },
  });
}

export { getAuthLogout };
