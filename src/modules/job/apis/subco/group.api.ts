import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

async function postAssignOrSyncGroups(
  initial: string,
): Promise<IResponse<void>> {
  return apiClient.post<IResponse<void>, any>({
    url: API_ENDPOINTS.JOB.SUBCO.ASSIGN_OR_SYNC_GROUPS,
    data: { initial: initial },
    options: {
      credentials: "include",
    },
  });
}

export { postAssignOrSyncGroups };
