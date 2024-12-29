import type { IResponse } from "@core/types/api.types";
import HTTPError from "@models/errors/http-error";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ToastError, ToastSuccess } from "@components/toast/toast";
import { getUser } from "@authentication/store/auth-store";
import { postAssignOrSyncGroups } from "@job/apis/subco/group.api";
import { getCorrectionGroups } from "@job/apis/subco/correction.api";
import { QUERY_KEYS } from "@constants/query-keys.constant";
import UnauthorizedError from "@models/errors/unauthorized-error";

function useGroup() {
  const user = getUser();

  const assignOrSyncGroups = useMutation<IResponse<any>, HTTPError>({
    mutationFn: async () => {
      if (!user?.username) throw new UnauthorizedError();
      if (!user?.roles.includes("Software Subject Coordinator"))
        // WARN
        throw new UnauthorizedError();

      return await postAssignOrSyncGroups(user?.username);
    },

    onError: (error: HTTPError) => {
      ToastError({
        message: error.message || "Failed to assign or sync groups.",
      });
    },
    onSuccess: () => {
      ToastSuccess({
        message: "Groups assigned or synced successfully.",
      });
    },
  });

  const getCorrection = () => {
    if (!user?.username) throw new UnauthorizedError();
    if (!user?.roles.includes("Software Subject Coordinator"))
      // WARN
      throw new UnauthorizedError();

    return useQuery<IResponse<any>, HTTPError>({
      queryKey: [QUERY_KEYS.JOB.SUBCO.CORRECTION, user.username],
      queryFn: () => getCorrectionGroups(user.username),
      enabled: Boolean(user.username),
    });
  };

  return {
    assignOrSyncGroups,
    getCorrection,
  };
}

export { useGroup };
