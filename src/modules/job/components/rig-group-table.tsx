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

const RIGGroupTable = ({
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
          <TableHead className="">Group</TableHead>
          <TableHead className="text-center">Assistant</TableHead>
          <TableHead className="text-right">Guider</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* TODO : FOR EACH GROUP */}
        <TableRow className="whitespace-nowrap">
            <TableCell className="font-medium">groupId</TableCell>
            <TableCell className="flex flex-col text-center">
              {/* TODO : FOR EACH ASSISTANT IN GROUP*/}
              <div>ast1</div>
              <div>ast2</div> 
              <div>ast3</div>
            </TableCell>
            <TableCell className="text-right  tabular-nums">
              guider
            </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    
  );
};
export default RIGGroupTable;

{/*  */}