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
import { Loader } from "lucide-react";

const ActiveJobTabs = () => {
  const { data: activeJobs, isPending: activeJobsLoading } =
    useAssistantActiveJobs({
      semester_id: "a7ff28f1-bd85-410b-b222-a29c619068fa",
    });

  if (activeJobsLoading)
    // TODO: Ganti
    return (
      <div className="w-full h-full p-20 flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <Table className="w-full h-full">
      <TableHeader>
        <TableRow>
          <TableHead className="px-10">Type</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="text-right px-10">Revision</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activeJobs?.data.map((job: IJob, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-medium px-10">{job.job}</TableCell>
            <TableCell>{job.course_name}</TableCell>
            <TableCell>{job.start_date}</TableCell>
            <TableCell>{job.end_date}</TableCell>
            <TableCell className="text-right px-10 tabular-nums">
              {job.revision_count}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ActiveJobTabs;
