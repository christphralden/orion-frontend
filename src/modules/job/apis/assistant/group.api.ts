import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";
import { GroupWithThreads } from "@job/types/group.types";

async function getGroupDetails(
  id: string,
): Promise<IResponse<GroupWithThreads>> {
  return apiClient.get<IResponse<GroupWithThreads>>({
    url: `${API_ENDPOINTS.JOB.ASSISTANT.GROUP}/${id}`,
    options: {
      credentials: "include",
    },
  });
}

export { getGroupDetails };
