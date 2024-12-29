import { IJob, JobFilters } from "@job/types/job.types";
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

function filterJobs(jobs: IJob[], filters: JobFilters): IJob[] {
  return jobs.filter((job) => {
    if (filters.job && job.job !== filters.job) return false;
    if (filters.courseCode && job.courseCode !== filters.courseCode)
      return false;
    if (filters.courseName && !job.courseName.includes(filters.courseName))
      return false;
    if (filters.jobType && job.type !== filters.jobType) return false;
    if (filters.status && job.status !== filters.status) return false;

    if (
      filters.startDateFrom &&
      new Date(job.startDate) < new Date(filters.startDateFrom)
    )
      return false;
    if (
      filters?.startDateTo &&
      new Date(job.startDate) > new Date(filters.startDateTo)
    )
      return false;

    return true;
  });
}

export { groupByJob, filterJobs };
