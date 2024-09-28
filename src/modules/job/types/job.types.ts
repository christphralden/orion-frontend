import { JOB_STATUS, JOBS } from "@job/constants/job.constant";
import { UserString } from "@core/types/user.types";

type JobList = (typeof JOBS)[number];
type JobStatus = (typeof JOB_STATUS)[number];

type QueueTransaction = {
  submit_date: string;
  return_date: string;
  is_revision: boolean;
};

interface IJob {
  course_code: string;
  course_name: string;
  user: UserString;
  subco: UserString;
  class: string;
  job: JobList;
  type: string;
  start_date: string;
  end_date: string;
  revision_count: number;
  weight: number;
  number: number | string;
  status: JobStatus;
  queue_transactions: QueueTransaction[];
}

export type { IJob, QueueTransaction };
export type { JobList, JobStatus };
