import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";
import { Group } from "@job/types/group.types";

async function getCasemakingGroups(
  initial: string,
): Promise<IResponse<Group[]>> {
  return apiClient.get<IResponse<Group[]>>({
    url: API_ENDPOINTS.JOB.SUBCO.CASEMAKING.GROUP,
    params: { initial: initial },
    options: {
      credentials: "include",
    },
  });
}

export { getCasemakingGroups };
