import type { IResponse } from "@core/types/api.types";
import type { IJob } from "@job/types/job.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

async function postAssignOrSyncGroups(
  username: string,
): Promise<IResponse<Record<string, IJob[]>>> {
  const res = await apiClient.post<IResponse<Record<string, IJob[]>>, any>({
    url: API_ENDPOINTS.JOB.SUBCO.ASSIGN_OR_SYNC_GROUPS,
    data: { username: username },
    options: {
      credentials: "include",
    },
  });
  return res;
}

export { postAssignOrSyncGroups };
