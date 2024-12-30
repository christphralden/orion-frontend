import { API_ENDPOINTS } from "@constants/api-endpoints.constant";
import apiClient from "@core/apis/api-client";
import { IResponse } from "@core/types/api.types";

async function createDiscussion(data: {
  threadId: number;
  authorInitial: string;
  content: string;
}): Promise<IResponse<any>> {
  return apiClient.post<IResponse<any>, typeof data>({
    url: API_ENDPOINTS.GROUP.THREAD.DISCUSSION.CREATE,
    data,
    options: {
      credentials: "include",
    },
  });
}

export { createDiscussion };
