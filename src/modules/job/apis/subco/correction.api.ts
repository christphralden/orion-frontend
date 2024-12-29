import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

async function getCorrectionGroups(initial: string): Promise<IResponse<any>> {
  return apiClient.get<IResponse<any>>({
    url: API_ENDPOINTS.JOB.SUBCO.CORRECTION.GROUP,
    params: { initial: initial },
    options: {
      credentials: "include",
    },
  });
}

export { getCorrectionGroups };
