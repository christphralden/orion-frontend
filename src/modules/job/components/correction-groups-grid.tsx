import { ToastError } from "@components/toast/toast";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@components/ui/card";

import { useGroup } from "@job/hooks/use-group";
import { Loader } from "lucide-react";
import { useEffect } from "react";

const CorrectionGroupsGrid = () => {
  const { getCorrection: getCorrectionGroups } = useGroup();

  const {
    data: correctionGroups,
    isLoading: correctionGroupsLoading,
    isError: correctionGroupsError,
    error,
  } = getCorrectionGroups();
  console.log("correction groups");

  useEffect(() => {
    if (correctionGroupsError) {
      ToastError({ message: error.message });
    }
  }, [correctionGroupsError, error]);

  if (correctionGroupsLoading) {
    return (
      <div className="w-full h-full p-20 flex justify-center items-center">
        <Loader className="animate-spin text-primary w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="mt-4">
      {correctionGroups?.data.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No Correction Groups Found</CardTitle>
            <CardDescription>
              There are no correction groups assigned to you. Click "Sync
              Groups" to refresh the data.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {correctionGroups?.data.map((group) => (
            <Card key={group.id} className="p-4">
              <CardHeader>
                <CardTitle>{group.courseName}</CardTitle>
                <CardDescription>
                  {group.assignmentType} - {group.assignmnentJob}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Course ID: {group.courseId}</p>
                <p>Subco Initial: {group.subcoInitial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CorrectionGroupsGrid;
