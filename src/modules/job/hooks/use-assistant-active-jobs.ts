import type { IResponse } from "@core/types/api.types";
import type { IJob } from "@job/types/job.types";
import type { AssistantActiveJobsRequest } from "@job/apis/assistant/active-jobs.api";

import { getAssistantActiveJobs } from "@job/apis/assistant/active-jobs.api";

import HTTPError from "@models/errors/http-error";
import UnauthorizedError from "@models/errors/unauthorized-error";

import { useQuery } from "@tanstack/react-query";
import { useUser } from "@authentication/store/auth-store";
import { QUERY_KEYS } from "@constants/query-keys.constant";

/*
  Params:
    semester_id:
      when not given a semester_id, it will default to the current semester
      when given a semester_id, it will query said semester_id
    username: 
      when not given a username, it will default to current user
      when given a usernmae, it will query said users active jobs
*/

export function useAssistantActiveJobs({
  semester_id,
  username,
}: Partial<AssistantActiveJobsRequest>) {
  const user = useUser();
  const finalUsername = user?.username ?? username;

  const query = useQuery<IResponse<IJob[]>, HTTPError>({
    queryKey: [
      QUERY_KEYS.JOB.ASSISTANT.ACTIVE,
      { semester_id, username: finalUsername },
    ],
    queryFn: async () => {
      if (!semester_id || !finalUsername) {
        throw new UnauthorizedError();
      }
      return await getAssistantActiveJobs({
        semester_id,
        username: finalUsername,
      });
    },
    enabled: !!finalUsername && !!semester_id,
    retry: 3,
    refetchOnMount: true,
  });

  return query;
}
