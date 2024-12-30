import { ToastError } from "@components/toast/toast";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@components/ui/card";
import { COLORS } from "@constants/colors.constant";

import { useGroup } from "@job/hooks/use-group";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CasemakingGroupsGrid = () => {
  const color = COLORS["Case Making"];

  const { getCasemaking: getCasemakingGroups } = useGroup();

  const {
    data: correctionGroups,
    isLoading: correctionGroupsLoading,
    isError: correctionGroupsError,
    error,
  } = getCasemakingGroups();

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
            <CardTitle>No Casemaking Groups Found</CardTitle>
            <CardDescription>
              There are no casemaking groups assigned to you. Click "Sync
              Groups" to refresh the data.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 min-h-48 md:min-h-64">
          {correctionGroups?.data.map((group) => (
            <Link to={`/case-making/groups/${group.id}`}>
              <Card
                key={group.id}
                className="p-2  flex-col justify-between h-full"
              >
                <CardHeader className="h-[75%]">
                  <div className="rounded-md border-2 border-gray-300 px-2 flex gap-2 justify-start items-center w-fit mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-xs font-medium text-gray-500 text-nowrap">
                      {group.assignmnentJob}
                    </p>
                  </div>

                  <CardTitle>
                    {group.courseId} - {group.courseName}
                  </CardTitle>
                  <CardDescription>{group.assignmentType}</CardDescription>
                </CardHeader>
                <CardContent className="h-full h-[25%] flex items-end ">
                  <p>Subco: {group.subcoInitial}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CasemakingGroupsGrid;
