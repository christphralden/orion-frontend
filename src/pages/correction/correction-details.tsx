import { useUser } from "@authentication/store/auth-store";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import AssistantListTable from "@job/components/assistant-list-table";
import { useGroup } from "@job/hooks/use-group";
import { Separator } from "@radix-ui/react-separator";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "lucide-react";
import { ToastError } from "@components/toast/toast";

const CorrectionDetails = () => {
  const { id } = useParams();
  const { getDetails } = useGroup();

  const {
    data,
    isLoading: groupDetailLoading,
    isError: groupDetailError,
    error,
  } = getDetails(id as string);

  const user = useUser();

  const [link, setLink] = useState("");

  const [selectedTab, setSelectedTab] = useState("List");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    if (groupDetailError) {
      ToastError({ message: error.message });
    }
  }, [groupDetailError, error]);

  if (groupDetailLoading) {
    return (
      <div className="w-full h-fit p-20 flex justify-center items-center">
        <Loader className="animate-spin text-primary w-8 h-8" />
      </div>
    );
  }

  if (!data?.data) return null;

  const groupDetail = data.data;
  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex flex-col">
        <p className="text-2xl font-semibold">
          {groupDetail.courseId} - {groupDetail.courseName}
        </p>
        <p className="text-xl">{groupDetail.assignmentType}</p>
      </div>

      <div className="flex space-x-4">
        <Button
          variant={"outline"}
          onClick={() => handleTabChange("List")}
          className={selectedTab === "List" ? "font-bold " : ""}
        >
          List
        </Button>
        <Button
          variant={"outline"}
          onClick={() => handleTabChange("Forum")}
          className={selectedTab === "Forum" ? "font-bold " : ""}
        >
          Forum
        </Button>
      </div>

      <div className="mt-4 space-y-2">
        {selectedTab === "List" && (
          <>
            {!user?.roles.includes("Software Subject Coordinator") && (
              <Card className="w-full flex flex-col flex-1">
                <CardHeader>
                  <CardTitle>Correction Submission</CardTitle>
                  <CardDescription>
                    Submit correction's onedrive link
                  </CardDescription>
                </CardHeader>
                <CardContent className="w-full flex-grow overflow-y-auto h-auto">
                  <div className="flex space-x-2">
                    <Input
                      value={link}
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                      className="bg-white"
                    />
                    <Button variant="default">Submit Link</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="h-full w-full flex flex-col flex-1">
              <CardHeader>
                <CardTitle>Assistant List</CardTitle>
                <CardDescription>
                  Assistants that has the correction.
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className="p-0 w-full flex-grow overflow-y-auto h-1 min-h-[40vh]">
                <AssistantListTable list={groupDetail.groupAssistants} />
              </CardContent>
            </Card>
          </>
        )}
        {selectedTab === "Forum" && <>Forum</>}
      </div>
    </div>
  );
};

export default CorrectionDetails;
