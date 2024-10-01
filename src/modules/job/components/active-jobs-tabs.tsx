import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { useAssistantActiveJobs } from "@job/hooks/use-assistant-active-jobs";
import { IJob } from "@job/types/job.types";
import { cn } from "@utils/utils";
import { Loader } from "lucide-react";

const ActiveJobTabs = ({ className }: { className?: string }) => {
  const { data: activeJobs, isPending: activeJobsLoading } =
    useAssistantActiveJobs({
      semesterId: "a7ff28f1-bd85-410b-b222-a29c619068fa",
    });

  if (activeJobsLoading)
    return (
      <div className="w-full h-full p-20 flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <Table className={cn("table-auto w-full", className)}>
      <TableHeader className="sticky top-0 bg-white z-10">
        <TableRow className="whitespace-nowrap">
          <TableHead className="px-8">Job</TableHead>
          <TableHead className="">Type</TableHead>
          <TableHead className="">Class</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="text-right px-10">Revision</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activeJobs?.data.map((job: IJob, index: number) => (
          <TableRow className="whitespace-nowrap" key={index}>
            <TableCell className="font-medium px-8">{job.job}</TableCell>
            <TableCell>{job.type}</TableCell>
            <TableCell>{job.class}</TableCell>
            <TableCell>{job.courseName}</TableCell>
            <TableCell>{job.startDate}</TableCell>
            <TableCell>{job.endDate}</TableCell>
            <TableCell className="text-right px-10 tabular-nums">
              {job.revisionCount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ActiveJobTabs;
