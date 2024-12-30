import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { Loader } from "lucide-react";
import { ToastError, ToastSuccess } from "@components/toast/toast";
import { useThread } from "@thread/hooks/use-thread";
import { useGroup } from "@job/hooks/use-group";
import { useUser } from "@authentication/store/auth-store";
import { queryClient } from "@core/configs/react-query";
import { QUERY_KEYS } from "@constants/query-keys.constant";

const NewThread = () => {
  const { id } = useParams();
  const { getDetails } = useGroup();
  const { createNewThread } = useThread();
  const user = useUser();

  const navigate = useNavigate();

  const { mutate: handleCreateNewThread, isPending: createNewThreadPending } =
    createNewThread;

  const {
    data,
    isLoading: groupDetailLoading,
    isError: groupDetailError,
    error,
  } = getDetails(id as string);

  useEffect(() => {
    if (groupDetailError) {
      ToastError({ message: error.message });
    }
  }, [groupDetailError, error]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) {
      return ToastError({ message: "Unauthorized to create a new thread." });
    }

    const formData = new FormData(event.currentTarget);
    formData.append("groupId", id as string);
    formData.append("authorInitial", user.username);

    const title = formData.get("title");
    const content = formData.get("content");

    if (!title || !content) {
      ToastError({ message: "All fields are required." });
      return;
    }

    handleCreateNewThread(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.JOB.SUBCO.CORRECTION, id],
          refetchType: "all",
        });
        ToastSuccess({
          message: "Successfully created a new thread",
        });
        navigate(-1);
      },
    });
  };

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
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="text-xl font-medium">
          {groupDetail.courseId} - {groupDetail.courseName}
        </p>
        <p className="text-lg">{groupDetail.assignmentType}</p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create New Thread</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <Input
                name="title"
                placeholder="Thread title"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <Textarea
                name="content"
                placeholder="Enter the main content for the thread"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Attach Images
              </label>
              <Input
                name="images"
                type="file"
                multiple
                accept="image/*"
                className="mt-1"
              />
              <p className="text-xs text-gray-500">
                You can attach multiple images.
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="default"
                disabled={createNewThreadPending}
                className="flex gap-2"
              >
                {createNewThreadPending ? "Creating..." : "Create Thread"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewThread;
