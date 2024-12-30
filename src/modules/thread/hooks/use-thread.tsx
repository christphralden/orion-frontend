import { useMutation, useQuery } from "@tanstack/react-query";
import { ToastError } from "@components/toast/toast";
import { createThread, getThreadDetails } from "@thread/apis/thread.api";
import HTTPError from "@models/errors/http-error";
import { IResponse } from "@core/types/api.types";
import { ThreadData } from "@thread/types/thread.types";
import { QUERY_KEYS } from "@constants/query-keys.constant";
import { createDiscussion } from "@thread/apis/discussion.api";

function useThread() {
  const createNewThread = useMutation<IResponse<any>, HTTPError, FormData>({
    mutationFn: async (payload: FormData) => {
      return await createThread(payload);
    },
    onError: (error) => {
      ToastError({ message: error.message || "Failed to create thread." });
    },
  });

  const getThread = (theadId: string) => {
    return useQuery<IResponse<ThreadData>, HTTPError>({
      queryKey: [QUERY_KEYS.GROUP.THREAD, theadId],
      queryFn: async () => {
        const res = await getThreadDetails(theadId);
        return res;
      },
      enabled: Boolean(theadId),
    });
  };

  const addDiscussion = useMutation<
    IResponse<any>,
    HTTPError,
    { threadId: number; authorInitial: string; content: string }
  >({
    mutationFn: async (payload) => {
      return await createDiscussion(payload);
    },
    onError: (error) => {
      ToastError({ message: error.message || "Failed to add discussion." });
    },
  });

  return { createNewThread, getThread, addDiscussion };
}

export { useThread };
