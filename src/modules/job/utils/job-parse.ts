import { IJob } from "@job/types/job.types";
import { JobList } from "@job/types/job.types";

/*
  Parses the jobs based on jobType
*/
function groupByJob(jobs: IJob[]): Record<string, IJob[]> {
  return jobs.reduce<Record<JobList, IJob[]>>(
    (acc, job) => {
      if (!acc[job.job]) {
        acc[job.job] = [];
      }
      acc[job.job].push(job);
      return acc;
    },
    {} as Record<JobList, IJob[]>,
  );
}

export { groupByJob };
