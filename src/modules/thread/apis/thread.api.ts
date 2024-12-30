import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

async function createThread(data: FormData): Promise<IResponse<any>> {
  return apiClient.post<IResponse<any>, FormData>({
    url: API_ENDPOINTS.GROUP.THREAD.CREATE,
    data,
    options: {
      credentials: "include",
    },
  });
}

export { createThread };
