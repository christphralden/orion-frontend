import { useMetadata } from "@authentication/store/auth-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { useAssistantActiveJobs } from "@job/hooks/use-assistant-active-jobs";
import { IJob, JobFilters } from "@job/types/job.types";
import { cn } from "@utils/utils";
import { Loader } from "lucide-react";

const AssistantListTable = ({
  className,
}: {
  className?: string;
}) => {
    const metadata = useMetadata();

    const semesterId = metadata?.semester?.semesterId;

    const { data: activeJobs, isLoading: activeJobsLoading } =
        useAssistantActiveJobs(
            {
                semesterId,
            },
        );

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
          <TableHead className="px-8">Assistant</TableHead>
          <TableHead className="">Class</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="text-right px-10">Revision</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="whitespace-nowrap">
            <TableCell className="font-medium px-8">Initial</TableCell>
            <TableCell>class</TableCell>
            <TableCell>startDate</TableCell>
            <TableCell>endDate</TableCell>
            <TableCell className="text-right px-10 tabular-nums">
              revisionCount
            </TableCell>
        </TableRow>
        {/* {activeJobs?.data.map((job: IJob, index: number) => (
          <TableRow className="whitespace-nowrap" key={index}>
            <TableCell className="font-medium px-8">{job.job}</TableCell>
            <TableCell>{job.type}</TableCell>
            <TableCell>
              {job.job == "Correction" ? (
                <span>{job.class}</span>
              ) : (
                <span>-</span>
              )}
            </TableCell>
            <TableCell>{job.courseName}</TableCell>
            <TableCell>{job.startDate}</TableCell>
            <TableCell>{job.endDate}</TableCell>
            <TableCell className="text-right px-10 tabular-nums">
              {job.revisionCount}
            </TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  );
};
export default AssistantListTable;
