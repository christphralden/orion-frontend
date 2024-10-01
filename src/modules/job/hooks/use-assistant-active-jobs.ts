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
    semesterId: 
      when not given a semesterId, it will default to the current semester
      when given a semesterId, it will query said semesterId
    username: 
      when not given a username, it will default to current user
      when given a username, it will query said users active jobs
*/

function useAssistantActiveJobs({
  semesterId,
  username,
}: Partial<AssistantActiveJobsRequest>) {
  const user = getUser(); // UNSTABLE

  const finalUsername = useMemo(
    () => user?.username ?? username,
    [user?.username, username],
  );

  const queryFn = useCallback(async () => {
    if (!semesterId || !finalUsername) {
      throw new UnauthorizedError();
    }
    return await getAssistantActiveJobs({
      semesterId,
      username: finalUsername,
    });
  }, [semesterId, finalUsername]);

  const query = useQuery<IResponse<IJob[]>, HTTPError>({
    queryKey: [
      QUERY_KEYS.JOB.ASSISTANT.ACTIVE,
      { semesterId, username: finalUsername },
    ],
    queryFn,
    enabled: !!finalUsername && !!semesterId,
    retry: 1,
    refetchOnMount: true,
  });

  return query;
}

export { useAssistantActiveJobs };
