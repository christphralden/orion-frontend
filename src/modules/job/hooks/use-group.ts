import type { IResponse } from "@core/types/api.types";
import HTTPError from "@models/errors/http-error";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ToastError, ToastSuccess } from "@components/toast/toast";
import { getUser } from "@authentication/store/auth-store";
import { postAssignOrSyncGroups } from "@job/apis/subco/group.api";
import { getCorrectionGroups } from "@job/apis/subco/correction.api";
import { QUERY_KEYS } from "@constants/query-keys.constant";
import UnauthorizedError from "@models/errors/unauthorized-error";
import { IResponseSchema } from "@core/schema/api.schema";
import { GroupSchema, GroupWithThreadsSchema } from "@job/schema/group.schema";
import { Group, GroupWithThreads } from "@job/types/group.types";
import { MESSAGES } from "@constants/messages.constant";
import { z } from "zod";
import { queryClient } from "@core/configs/react-query";
import { useCallback } from "react";
import { getGroupDetails } from "@job/apis/assistant/group.api";
import { getCasemakingGroups } from "@job/apis/subco/case-making.api";

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
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.JOB.SUBCO.CORRECTION],
        refetchType: "all",
      });

      ToastSuccess({
        message: "Groups assigned or synced successfully.",
      });
    },
  });

  const getCorrection = () => {
    if (!user?.username) throw new UnauthorizedError();
    if (!user?.roles.includes("Software Subject Coordinator"))
      throw new UnauthorizedError(); // WARN

    const queryFn = useCallback(async () => {
      const res = await getCorrectionGroups(user.username);
      const parseResult = await IResponseSchema(
        z.array(GroupSchema),
      ).safeParseAsync(res);

      if (!parseResult.success) {
        throw new Error(MESSAGES.SCHEMA.ERROR);
      }
      return parseResult.data;
    }, [user.username]);

    return useQuery<IResponse<Group[]>, HTTPError>({
      queryKey: [QUERY_KEYS.JOB.SUBCO.CORRECTION, user.username],
      queryFn: queryFn,
      enabled: Boolean(user.username),
    });
  };

  const getCasemaking = () => {
    if (!user?.username) throw new UnauthorizedError();
    if (!user?.roles.includes("Software Subject Coordinator"))
      throw new UnauthorizedError(); // WARN

    const queryFn = useCallback(async () => {
      const res = await getCasemakingGroups(user.username);
      const parseResult = await IResponseSchema(
        z.array(GroupSchema),
      ).safeParseAsync(res);

      if (!parseResult.success) {
        throw new Error(MESSAGES.SCHEMA.ERROR);
      }
      return parseResult.data;
    }, [user.username]);

    return useQuery<IResponse<Group[]>, HTTPError>({
      queryKey: [QUERY_KEYS.JOB.SUBCO.CASEMAKING, user.username],
      queryFn: queryFn,
      enabled: Boolean(user.username),
    });
  };

  const getDetails = (id: string) => {
    if (!user?.username) throw new UnauthorizedError();

    const queryFn = useCallback(async () => {
      const res = await getGroupDetails(id);
      const parseResult = await IResponseSchema(
        GroupWithThreadsSchema,
      ).safeParseAsync(res);

      if (!parseResult.success) {
        throw new Error(MESSAGES.SCHEMA.ERROR);
      }

      return parseResult.data;
    }, [id]);

    return useQuery<IResponse<GroupWithThreads>, HTTPError>({
      queryKey: [QUERY_KEYS.JOB.SUBCO.CORRECTION, id],
      queryFn: queryFn,
      enabled: Boolean(user.username && id),
    });
  };

  return {
    assignOrSyncGroups,
    getCorrection,
    getCasemaking,
    getDetails,
  };
}

export { useGroup };
