import { JOB_STATUS, JOBS } from "@job/constants/job.constant";
import { UserString } from "@core/types/user.types";

type JobList = (typeof JOBS)[number];
type JobStatus = (typeof JOB_STATUS)[number];

type QueueTransaction = {
  submitDate: string;
  returnDate: string;
  isRevision: boolean;
};

interface IJob {
  courseCode: string;
  courseName: string;
  user: UserString;
  subco: UserString;
  class: string;
  job: JobList;
  type: string;
  startDate: string;
  endDate: string;
  revisionCount: number;
  weight: number;
  number: number | string;
  status: JobStatus;
  queueTransactions: QueueTransaction[];
}

interface JobFilters {
  courseCode?: string;
  courseName?: string;
  job?: JobList;
  jobType?: string;
  status?: string;
  startDateFrom?: string; // YYYY-MM-DD
  startDateTo?: string; // YYYY-MM-DD
}

export type { IJob, QueueTransaction, JobFilters };
export type { JobList, JobStatus };
