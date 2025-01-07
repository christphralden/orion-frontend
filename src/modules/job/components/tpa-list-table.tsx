import { useMetadata } from "@authentication/store/auth-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { cn } from "@utils/utils";
import { Loader } from "lucide-react";

const TPAListTable = ({
  className,
}: {
  className?: string;
}) => {

  if (false)
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
          <TableHead className="">TPA Subject</TableHead>
          <TableHead className="text-center">Assistant</TableHead>
          <TableHead className="text-center">Case Maker</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* TODO : FOR EACH ASSISTANT */}
        <TableRow className="whitespace-nowrap">
            <TableCell className="font-medium">Desktop</TableCell>
            <TableCell className="text-center">VH23-2</TableCell>
            <TableCell className="text-center">DC23-2</TableCell>
            <TableCell className="text-right  tabular-nums">
              Passed
            </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    
  );
};
export default TPAListTable;

{/*  */}