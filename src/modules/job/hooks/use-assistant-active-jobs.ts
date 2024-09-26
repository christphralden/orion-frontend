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
  Note:
    Ibaratnya cuman perlu fetch active jobs di home kan
    sisanya yaudah di store aja

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
    staleTime: 0,
    refetchOnMount: true,
  });

  return query;
}
