import { useMutation } from "@tanstack/react-query";
import { ToastError } from "@components/toast/toast";
import { createThread } from "@thread/apis/thread.api";
import type { CreateThreadRequest } from "@thread/apis/thread.api";
import HTTPError from "@models/errors/http-error";
import { IResponse } from "@core/types/api.types";

function useThread() {
  const createNewThread = useMutation<
    IResponse<any>,
    HTTPError,
    CreateThreadRequest
  >({
    mutationFn: async (payload: CreateThreadRequest) => {
      return await createThread(payload);
    },
    onError: (error) => {
      ToastError({ message: error.message || "Failed to create thread." });
    },
  });

  return { createNewThread };
}

export { useThread };
