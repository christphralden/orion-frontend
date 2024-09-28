import type { IUser } from "@core/types/user.types";
import UnauthorizedError from "@models/errors/unauthorized-error";

import { getAuthVerifyLogin } from "@authentication/apis/auth-verify-login.api";
import { create, useStore } from "zustand";
import { devtools } from "zustand/middleware";
import { IUserSchema } from "@core/schema/user.schema";
import { ExtractState } from "@utils/store";

/*
  Store for auth states.

  Reason using having a userStore is for a global store in the whole application.
  using useMutation should not interfere with the server state and client state.

  isAuthenticated:    A boolean state to know if a user is logged in
  user:               User object if currently logged in
  loading:            Loading state for verify only

  setUser():          Setter for user
  init():             Verify the state of authentication for usera
  clearAuthState():   Clearing the authentication state
*/

type AuthStore = {
  isAuthenticated: boolean;
  user?: IUser;
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
                loading: false,
              });
            } else {
              throw new UnauthorizedError();
            }
          } catch (error) {
            set({
              user: undefined,
              isAuthenticated: false,
              loading: false,
            });
          }
        },

        clearAuthState: async () => {
          set({
            isAuthenticated: false,
            user: undefined,
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
const authLoadingSelector = (state: ExtractState<typeof authStore>) =>
  state.loading;
const authActionSelector = (state: ExtractState<typeof authStore>) =>
  state.actions;

// Getters
const getIsAuthenticated = () => isAuthenticatedSelector(authStore.getState());
const getUser = () => userSelector(authStore.getState());
const getAuthLoading = () => authLoadingSelector(authStore.getState());
const getAuthActions = () => authActionSelector(authStore.getState());

function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector);
}

// Hooks
const useIsAuthenticated = () => useAuthStore(isAuthenticatedSelector);
const useUser = () => useAuthStore(userSelector);
const useAuthLoading = () => useAuthStore(authLoadingSelector);
const useAuthActions = () => useAuthStore(authActionSelector);

export {
  useAuthStore,
  getIsAuthenticated,
  getUser,
  getAuthLoading,
  getAuthActions,
  useIsAuthenticated,
  useUser,
  useAuthLoading,
  useAuthActions,
};
