import type { IResponse } from "@core/types/api.types";

import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";
import { IJob } from "@job/types/job.types";

type AssistantActiveJobsRequest = {
  semesterId: string;
  username: string;
};

async function getAssistantActiveJobs({
  semesterId,
  username,
}: AssistantActiveJobsRequest) {
  return apiClient.get<IResponse<IJob[]>>({
    url: API_ENDPOINTS.JOB.ASSISTANT.ACTIVE,
    params: {
      semesterId: semesterId,
      username: username,
    },
    options: {
      credentials: "include",
    },
  });
}

export { getAssistantActiveJobs };
export type { AssistantActiveJobsRequest };
