import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import ActiveJobsTable from "@job/components/active-jobs-table";

const CorrectionList = () => {
  return (
    <div className="h-full">
      <Card className="w-full flex flex-col flex-1">
        <CardHeader>
          <CardTitle>Correction List</CardTitle>
          <CardDescription className="flex">
            Today's workload filtered by corrections
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-0 w-full flex-grow overflow-y-auto h-1 min-h-[75vh]">
          <ActiveJobsTable filters={{ job: "Correction" }} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CorrectionList;
