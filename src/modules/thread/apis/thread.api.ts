import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

interface CreateThreadRequest {
  groupId: string;
  authorInitial: string;
  content: string;
}

async function createThread(
  data: CreateThreadRequest,
): Promise<IResponse<any>> {
  return apiClient.post<IResponse<any>, CreateThreadRequest>({
    url: API_ENDPOINTS.GROUP.THREAD.CREATE,
    data,
    options: {
      credentials: "include",
    },
  });
}

export type { CreateThreadRequest };
export { createThread };
