import type { IResponse } from "@core/types/api.types";
import type { IJob, JobFilters } from "@job/types/job.types";
import type { AssistantActiveJobsRequest } from "@job/apis/assistant/active-jobs.api";

import { getAssistantActiveJobs } from "@job/apis/assistant/active-jobs.api";

import HTTPError from "@models/errors/http-error";
import UnauthorizedError from "@models/errors/unauthorized-error";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "@authentication/store/auth-store";
import { QUERY_KEYS } from "@constants/query-keys.constant";
import { useCallback, useMemo } from "react";
import { filterJobs } from "@job/utils/job-parse";

/*
  Params:
    semesterId:
      when not given a semesterId, it will default to the current semester
      when given a semesterId, it will query said semesterId
    username:
      when not given a username, it will default to current user
      when given a username, it will query said users active jobs
*/
interface OptionalSemester {
  semesterId?: string;
}

function useAssistantActiveJobs(
  {
    semesterId,
    username,
  }: Partial<AssistantActiveJobsRequest> & OptionalSemester,
  filters?: JobFilters,
) {
  const user = getUser(); // WARN

  const finalUsername = useMemo(
    () => username ?? user?.username,
    [user?.username, username],
  );

  const queryFn = useCallback(async () => {
    if (!semesterId || !finalUsername) {
      throw new UnauthorizedError();
    }
    const response = await getAssistantActiveJobs({
      semesterId,
      username: finalUsername,
    });

    const jobs = response?.data ?? [];

    const filteredJobs = filters ? filterJobs(jobs, filters) : jobs;

    return { ...response, data: filteredJobs };
  }, [semesterId, finalUsername, filters]);

  return useQuery<IResponse<IJob[]>, HTTPError>({
    queryKey: [
      QUERY_KEYS.JOB.ASSISTANT.ACTIVE,
      { semesterId, username: finalUsername, filters },
    ],
    queryFn,
    enabled: Boolean(finalUsername && semesterId),
    retry: 1,
  });
}

export { useAssistantActiveJobs };
