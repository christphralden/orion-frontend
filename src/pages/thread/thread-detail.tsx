import { useParams } from "react-router-dom";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { Loader } from "lucide-react";
import { ToastError, ToastSuccess } from "@components/toast/toast";
import { useThread } from "@thread/hooks/use-thread";
import { useUser } from "@authentication/store/auth-store";
import { FormEvent } from "react";
import { queryClient } from "@core/configs/react-query";
import { QUERY_KEYS } from "@constants/query-keys.constant";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ThreadDetail = () => {
  const { threadId } = useParams();
  const { getThread, addDiscussion } = useThread();
  const user = useUser();

  const {
    data: threadData,
    isLoading: threadLoading,
    isError: threadError,
    error,
  } = getThread(threadId as string);

  const { mutate: handleAddDiscussion, isPending: addingDiscussion } =
    addDiscussion;

  if (threadLoading) {
    return (
      <div className="w-full h-fit p-20 flex justify-center items-center">
        <Loader className="animate-spin text-primary w-8 h-8" />
      </div>
    );
  }

  if (threadError) {
    return (
      <p className="text-red-500 text-center">
        {error?.message || "Failed to load thread."}
      </p>
    );
  }

  if (!threadData?.data) return null;

  const thread = threadData.data;

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      ToastError({ message: "You need to log in to comment." });
      return;
    }

    const formData = new FormData(e.currentTarget);
    const content = formData.get("content")?.toString().trim();

    if (!content) {
      ToastError({ message: "Comment content is required." });
      return;
    }

    const payload = {
      threadId: thread.id,
      authorInitial: user.username,
      content,
    };

    handleAddDiscussion(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GROUP.THREAD, threadId],
          refetchType: "all",
        });

        ToastSuccess({ message: "Comment added successfully!" });
      },
    });
    e.currentTarget.reset();
  };

  return (
    <div className="space-y-6 w-full">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">{thread.title}</h1>
        <p className="mt-2 text-sm text-gray-500">{thread.content}</p>
        <div className="mt-4 text-sm text-gray-400">
          <span>Author: </span>
          <span className="font-medium">{thread.author.fullName}</span>
        </div>
      </div>

      {thread.threadImages.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Thread Images</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            className="relative max-h-[500px]"
            pagination={true}
            modules={[Pagination]}
          >
            {thread.threadImages.map((image, index) => (
              <SwiperSlide key={image.id} className="w-12 h-12">
                <img
                  src={image.url}
                  alt={`Thread Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg bg-center	"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Add Comment</h2>
        <form onSubmit={handleCommentSubmit} className="mt-4 space-y-4">
          <Textarea
            name="content"
            placeholder="Write your comment..."
            required
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={addingDiscussion} variant="default">
              {addingDiscussion ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Comments</h2>
        {thread.threadDiscussions.length > 0 ? (
          thread.threadDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              <p className="text-sm text-gray-800">{discussion.content}</p>
              <div className="mt-2 flex justify-between items-center text-sm text-gray-400">
                <span>Author: {discussion.authorInitial}</span>
                <span>{new Date(discussion.createdAt).toLocaleString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default ThreadDetail;
