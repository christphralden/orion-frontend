import { ToastError } from "@components/toast/toast";
import { Button } from "@components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { useGroup } from "@job/hooks/use-group";
import { MESSAGES } from "@constants/messages.constant";
import Loader from "@components/fallbacks/loader";

const CorrectionGroups = () => {
  const { assignOrSyncGroups, getCorrection: getCorrectionGroups } = useGroup();

  const { mutate } = assignOrSyncGroups;

  const {
    data: correctionGroups,
    isLoading: correctionGroupsLoading,
    isError,
  } = getCorrectionGroups();

  // if (isError) {
  //   ToastError({ message: MESSAGES.GENERIC.UNHANDLED });
  // }

  if (correctionGroupsLoading) {
    <div className="w-full h-full p-20 flex justify-center items-center">
      <Loader />
    </div>;
  }
  return (
    <div className="h-full">
      <Card className="w-full h-fit flex flex-col flex-1">
        <CardHeader className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col gap-1 ">
            <CardTitle>Correction Groups</CardTitle>
            <CardDescription className="flex">
              Correction groups
            </CardDescription>
          </div>
          <div className="w-fit">
            <Button
              onClick={() => {
                mutate();
              }}
              variant="default"
            >
              Sync groups
            </Button>
          </div>
        </CardHeader>
      </Card>
      <div>
        {correctionGroups?.data.map((group) => {
          <h3>{group.id}</h3>;
        })}
      </div>
    </div>
  );
};

export default CorrectionGroups;
