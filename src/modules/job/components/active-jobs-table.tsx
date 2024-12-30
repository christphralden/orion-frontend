import { useMetadata } from "@authentication/store/auth-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";
import apiClient from "@core/apis/api-client";
import { IResponse } from "@core/types/api.types";
import { useAssistantActiveJobs } from "@job/hooks/use-assistant-active-jobs";
import { IJob, JobFilters } from "@job/types/job.types";
import { cn } from "@utils/utils";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ActiveJobsTable = ({
  className,
  filters,
}: {
  className?: string;
  filters?: JobFilters;
}) => {
  const metadata = useMetadata();

  const semesterId = metadata?.semester?.semesterId;

  const navigate = useNavigate();

  const { data: activeJobs, isLoading: activeJobsLoading } =
    useAssistantActiveJobs(
      {
        semesterId,
      },
      filters,
    );

  const handleRowClick = async (job: IJob) => {
    const getGroupByJobEndpoint = API_ENDPOINTS.JOB.ASSISTANT.GET_GROUP_BY_JOB;

    const res = await  apiClient.get<IResponse<{groupId : string}>>({
      url: getGroupByJobEndpoint,
      params: {
        courseCode: job.courseCode,
        subco: job.subco,
        assignmentType: job.type,
        job: job.job
      },
      options: {
        credentials: "include",
      },
    });

    const groupId = res.data.groupId;

    navigate(`/correction/groups/${groupId}`);
  }

  if (activeJobsLoading)
    return (
      <div className="w-full h-full p-20 flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <Table
      className={cn("table-auto w-full h-fit overflow-y-auto ", className)}
    >
      <TableHeader className="sticky top-0 bg-white z-10">
        <TableRow className="whitespace-nowrap">
          <TableHead className="px-6">Job</TableHead>
          <TableHead className="">Type</TableHead>
          <TableHead className="">Class</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="text-right px-6">Revision</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activeJobs?.data.map((job: IJob, index: number) => (
          <TableRow onClick={() => handleRowClick(job)} className="whitespace-nowrap cursor-pointer" key={index}>
            <TableCell className="font-medium px-6">{job.job}</TableCell>
            <TableCell>{job.type}</TableCell>
            <TableCell>
              {job.job == "Correction" ? (
                <span>{job.class}</span>
              ) : (
                <span>-</span>
              )}
            </TableCell>
            <TableCell>
              {job.courseCode} - {job.courseName}
            </TableCell>
            <TableCell>{job.startDate}</TableCell>
            <TableCell>{job.endDate}</TableCell>
            <TableCell className="text-right px-6 tabular-nums">
              {job.revisionCount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ActiveJobsTable;
