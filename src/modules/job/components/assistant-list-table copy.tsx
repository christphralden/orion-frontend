import { useMetadata } from "@authentication/store/auth-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import { useAssistantActiveJobs } from "@job/hooks/use-assistant-active-jobs";
import { cn } from "@utils/utils";
import { Loader } from "lucide-react";
import { Button } from "@components/ui/button";

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
      className={cn("table-auto w-full h-fit overflow-y-auto", className)}
    >
      <TableHeader className="sticky top-0 bg-white z-10">
        <TableRow className="whitespace-nowrap">
          <TableHead className="px-8">Assistant</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead className="text-right px-10">End Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* jadi yang di foreach dialog aja den */}
        <Dialog>
        <DialogTrigger asChild>
          <TableRow className="whitespace-nowrap">
              <TableCell className="font-medium px-8">Initial</TableCell>
              <TableCell>class</TableCell>
              <TableCell>startDate</TableCell>
              <TableCell className="text-right px-10 tabular-nums">
                endDate
              </TableCell>
          </TableRow>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Correction Details</DialogTitle>
              <DialogDescription>
                Initial's Correction Submission
              </DialogDescription>
            </DialogHeader>
              <div className="flex flex-col space-y-2">
                <div>
                    <p className="flex font-semibold text-xl justify-center">Assistant's Initial</p>
                    <a className="flex justify-center">Assistant's Link - Rev</a>
                </div>
                <div className="flex justify-center space-x-2">
                    <Button variant="default" >
                        Approve
                    </Button>
                    <Button variant="destructive" >
                        Decline
                    </Button>
                </div>
              </div>
            <DialogFooter>
              {/* <Button type="submit">Save changes</Button> */}
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* smpe sini yang di foreach*/}
      </TableBody>
    </Table>

    
  );
};
export default AssistantListTable;

{/*  */}