import type { IResponse } from "@core/types/api.types";

import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";
import { IJob } from "@job/types/job.types";

type AssistantActiveJobsRequest = {
  semester_id: string;
  username: string;
};

async function getAssistantActiveJobs({
  semester_id,
  username,
}: AssistantActiveJobsRequest) {
  const res = await apiClient.get<IResponse<IJob[]>>({
    url: API_ENDPOINTS.JOB.ASSISTANT.ACTIVE,
    params: {
      semester_id: semester_id,
      username: username,
    },
    options: {
      credentials: "include",
    },
  });

  return res;
}

export { getAssistantActiveJobs };
export type { AssistantActiveJobsRequest };
