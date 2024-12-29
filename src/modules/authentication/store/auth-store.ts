import type { IUser } from "@core/types/user.types";
import UnauthorizedError from "@models/errors/unauthorized-error";

import { getAuthVerifyLogin } from "@authentication/apis/auth-verify-login.api";
import { create, useStore } from "zustand";
import { devtools } from "zustand/middleware";
import { IUserSchema } from "@core/schema/user.schema";
import { ExtractState } from "@utils/store";
import { getActiveSemester, Semester } from "@job/apis/semester.api";
import { SemesterSchema } from "@job/schema/semester.schema";

/*
  Store for auth states.

  Reason using having a userStore is for a global store in the whole application.
  using useMutation should not interfere with the server state and client state.

  isAuthenticated:    A boolean state to know if a user is logged in
  user:               User object if currently logged in
  loading:            Loading state for verify only

  setUser():          Setter for user
  init():             Verify the state of authentication for user
  clearAuthState():   Clearing the authentication state
*/

type AuthMetadata = {
  semester?: Semester;
};
type AuthStore = {
  isAuthenticated: boolean;
  user?: IUser;
  metadata?: AuthMetadata;
  loading: boolean;
  actions: {
    setUser: (user: IUser) => void;
    init: () => void;
    clearAuthState: () => void;
  };
};

const authStore = create<AuthStore>()(
  devtools(
    (set) => ({
      isAuthenticated: false,
      user: undefined,
      loading: true,

      actions: {
        setUser: (user: IUser) => {
          set({
            user,
            isAuthenticated: !!user,
          });
        },

        init: async () => {
          set({ loading: true });
          try {
            const res = await getAuthVerifyLogin();

            if (res.status) {
              const user: IUser = IUserSchema.parse(res.data);
              set({
                user,
                isAuthenticated: true,
              });
            } else {
              throw new UnauthorizedError();
            }

            const semesterRes = await getActiveSemester();

            if (semesterRes.status) {
              const semester: Semester = SemesterSchema.parse(semesterRes.data);
              set({
                metadata: {
                  semester: semester,
                },
              });
            }

            set({
              loading: false,
            });
          } catch (error) {
            set({
              user: undefined,
              metadata: undefined,
              isAuthenticated: false,
              loading: false,
            });
          }
        },

        clearAuthState: async () => {
          set({
            isAuthenticated: false,
            user: undefined,
            metadata: undefined,
          });
        },
      },
    }),
    {
      name: "auth-store",
      enabled: !import.meta.env.PROD,
    },
  ),
);

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

const isAuthenticatedSelector = (state: ExtractState<typeof authStore>) =>
  state.isAuthenticated;
const userSelector = (state: ExtractState<typeof authStore>) => state.user;
const metadataSelector = (state: ExtractState<typeof authStore>) =>
  state.metadata;
const authLoadingSelector = (state: ExtractState<typeof authStore>) =>
  state.loading;
const authActionSelector = (state: ExtractState<typeof authStore>) =>
  state.actions;

// Getters
const getIsAuthenticated = () => isAuthenticatedSelector(authStore.getState());
const getUser = () => userSelector(authStore.getState());
const getMetadata = () => metadataSelector(authStore.getState());
const getAuthLoading = () => authLoadingSelector(authStore.getState());
const getAuthActions = () => authActionSelector(authStore.getState());

function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector);
}

// Hooks
const useIsAuthenticated = () => useAuthStore(isAuthenticatedSelector);
const useUser = () => useAuthStore(userSelector);
const useMetadata = () => useAuthStore(metadataSelector);
const useAuthLoading = () => useAuthStore(authLoadingSelector);
const useAuthActions = () => useAuthStore(authActionSelector);

export {
  useAuthStore,
  getIsAuthenticated,
  getUser,
  getMetadata,
  getAuthLoading,
  getAuthActions,
  useIsAuthenticated,
  useUser,
  useMetadata,
  useAuthLoading,
  useAuthActions,
};
