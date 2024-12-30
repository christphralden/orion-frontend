import { ToastError } from "@components/toast/toast";
import { Button } from "@components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import CasemakingGroupsGrid from "@job/components/case-making-group-grids";
import CorrectionGroupsGrid from "@job/components/correction-groups-grid";

import { useGroup } from "@job/hooks/use-group";
import { Loader } from "lucide-react";
import { useEffect } from "react";

const CasemakingGroups = () => {
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
    <div className="h-full w-full flex flex-col gap-4">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-xl font-medium">Casemaking Groups</p>
          <p className="text-lg">
            A list of casemaking groups assigned to you.
          </p>
        </div>
        <Button
          onClick={() => {
            handleAssignOrSyncGroups();
          }}
          variant="default"
        >
          Sync Groups
        </Button>
      </div>

      {assignPending ? (
        <div className="w-full h-fit p-20 flex justify-center items-center">
          <Loader className="animate-spin text-primary w-8 h-8" />
        </div>
      ) : (
        <CasemakingGroupsGrid />
      )}
    </div>
  );
};

export default CasemakingGroups;
