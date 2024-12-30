import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import {
  Credenza,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaBody,
} from "@components/ui/credenza";
import { Button } from "@components/ui/button";
import { GroupAssistantWithDetails } from "@job/types/group.types";
import { cn } from "@utils/utils";

const AssistantListTable = ({
  className,
  list,
}: {
  className?: string;
  list: GroupAssistantWithDetails[];
}) => {
  const [selectedAssistant, setSelectedAssistant] =
    useState<GroupAssistantWithDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRowClick = (assistant: GroupAssistantWithDetails) => {
    setSelectedAssistant(assistant);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <Table
          className={cn(
            "table-auto w-full h-fit overflow-y-auto bg-white",
            className,
          )}
        >
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10%] px-6">Status</TableHead>
              <TableHead className="w-[20%]">Assistant</TableHead>

              <TableHead className="w-[20%]">Class</TableHead>
              <TableHead className="w-[20%]">Start Date</TableHead>
              <TableHead className="w-[20%] text-right px-6">
                End Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((li, key) => (
              <TableRow
                key={key}
                className="cursor-pointer hover:bg-gray-50 whitespace-nowrap"
                onClick={() => handleRowClick(li)}
              >
                <TableCell className="px-6">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      li.submissionLink ? "bg-blue-500" : "bg-gray-300",
                    )}
                    title={li.submissionLink ? "Submitted" : "Not Submitted"}
                  ></div>
                </TableCell>
                <TableCell className="font-medium">{li.initial}</TableCell>
                <TableCell>{li.class}</TableCell>
                <TableCell>{li.startDate}</TableCell>
                <TableCell className="text-right px-6 tabular-nums">
                  {li.endDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Credenza open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <CredenzaContent className="min-h-[300px]">
          <CredenzaHeader>
            <CredenzaTitle>
              {selectedAssistant
                ? `${selectedAssistant.initial}'s Correction Submission`
                : "No Assistant Selected"}
            </CredenzaTitle>
          </CredenzaHeader>
          <CredenzaBody>
            {selectedAssistant ? (
              <div className="flex flex-col items-center space-y-6 w-full p-2 pb-8 md:pb-2">
                <div className="flex flex-col items-center w-full space-y-2">
                  <div className="flex justify-between w-full text-sm">
                    <span className="font-medium">Class:</span>
                    <span>{selectedAssistant.class}</span>
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span className="font-medium">Start Date:</span>
                    <span>{selectedAssistant.startDate}</span>
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span className="font-medium">End Date:</span>
                    <span>{selectedAssistant.endDate}</span>
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span className="font-medium">Remaining Days:</span>
                    <span>
                      {Math.max(
                        0,
                        Math.ceil(
                          (new Date(selectedAssistant.endDate).getTime() -
                            new Date().getTime()) /
                            (1000 * 60 * 60 * 24),
                        ),
                      )}{" "}
                      days
                    </span>
                  </div>
                </div>

                {selectedAssistant.submissionLink ? (
                  <a
                    href={selectedAssistant.submissionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-blue-600 rounded-md hover:underline"
                  >
                    View Assistant's Submission
                  </a>
                ) : (
                  <p className="text-sm italic text-gray-500">
                    {selectedAssistant.initial} has not submitted the
                    correction.
                  </p>
                )}

                <div className="flex justify-center space-x-4 w-full">
                  <Button variant="destructive" className="w-full max-w-xs">
                    Decline
                  </Button>
                  <Button variant="outline" className="w-full max-w-xs">
                    Approve
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-gray-500">No Assistant Selected</p>
              </div>
            )}
          </CredenzaBody>
        </CredenzaContent>
      </Credenza>
    </div>
  );
};

export default AssistantListTable;
