import { getUser } from "@authentication/store/auth-store";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import ActiveJobsTable from "@job/components/active-jobs-table";

const CaseMakeList = () => {
  const user = getUser();

  const role = user?.roles;

  return (
    <div className="h-full">
      <Card className="w-full flex flex-col flex-1">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Active Jobs</CardTitle>
            <CardDescription className="flex">
              Today's workload filtered by case making
            </CardDescription>
          </div>
          <div>
            <Button variant="default">Sync Group</Button>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="p-0 w-full flex-grow overflow-y-auto h-1 min-h-[75vh]">
          <ActiveJobsTable filters={{ job: "Case Making" }} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseMakeList;
