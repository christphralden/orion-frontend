import { ToastError } from "@components/toast/toast";
import { Button } from "@components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import CorrectionGroupsGrid from "@job/components/correction-groups-grid";

import { useGroup } from "@job/hooks/use-group";
import { Loader } from "lucide-react";
import { useEffect } from "react";

const CorrectionGroups = () => {
  const { assignOrSyncGroups } = useGroup();

  const {
    mutate: handleAssignOrSyncGroups,
    isPending: assignPending,
    isError: assignError,
    error,
  } = assignOrSyncGroups;

  useEffect(() => {
    if (assignError) {
      ToastError({ message: error.message });
    }
  }, [assignError, error]);

  return (
    <div className="h-full">
      <Card className="w-full h-fit flex flex-col flex-1">
        <CardHeader className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <CardTitle>Correction Groups</CardTitle>
            <CardDescription className="flex">
              A list of correction groups assigned to you.
            </CardDescription>
          </div>
          <div className="w-fit">
            <Button
              onClick={() => {
                handleAssignOrSyncGroups();
              }}
              variant="default"
            >
              Sync Groups
            </Button>
          </div>
        </CardHeader>
      </Card>
      {assignPending ? (
        <div className="w-full h-fit p-20 flex justify-center items-center">
          <Loader className="animate-spin text-primary w-8 h-8" />
        </div>
      ) : (
        <CorrectionGroupsGrid />
      )}
    </div>
  );
};

export default CorrectionGroups;
