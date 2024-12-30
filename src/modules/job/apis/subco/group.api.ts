import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

async function postAssignOrSyncGroups(
  username: string,
): Promise<IResponse<void>> {
  const res = await apiClient.post<IResponse<void>, any>({
    url: API_ENDPOINTS.JOB.SUBCO.ASSIGN_OR_SYNC_GROUPS,
    data: { username: username },
    options: {
      credentials: "include",
    },
  });

  return res;
}

export { postAssignOrSyncGroups };
