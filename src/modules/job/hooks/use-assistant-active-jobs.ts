import type { IResponse } from "@core/types/api.types";
import type { IJob } from "@job/types/job.types";
import type { AssistantActiveJobsRequest } from "@job/apis/assistant/active-jobs.api";

import { getAssistantActiveJobs } from "@job/apis/assistant/active-jobs.api";

import HTTPError from "@models/errors/http-error";
import UnauthorizedError from "@models/errors/unauthorized-error";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "@authentication/store/auth-store";
import { QUERY_KEYS } from "@constants/query-keys.constant";
import { useCallback, useMemo } from "react";

/*
  Params:
    semester_id: (be using snake_case)
      when not given a semester_id, it will default to the current semester
      when given a semester_id, it will query said semester_id
    username: 
      when not given a username, it will default to current user
      when given a username, it will query said users active jobs
*/

function useAssistantActiveJobs({
  semester_id,
  username,
}: Partial<AssistantActiveJobsRequest>) {
  const user = getUser(); // UNSTABLE

  const finalUsername = useMemo(
    () => user?.username ?? username,
    [user?.username, username],
  );

  const queryFn = useCallback(async () => {
    if (!semester_id || !finalUsername) {
      throw new UnauthorizedError();
    }
    return await getAssistantActiveJobs({
      semester_id,
      username: finalUsername,
    });
  }, [semester_id, finalUsername]);

  const query = useQuery<IResponse<IJob[]>, HTTPError>({
    queryKey: [
      QUERY_KEYS.JOB.ASSISTANT.ACTIVE,
      { semester_id, username: finalUsername },
    ],
    queryFn,
    enabled: !!finalUsername && !!semester_id,
    retry: 1,
    refetchOnMount: true,
  });

  return query;
}

export { useAssistantActiveJobs };
