import type { IUser } from "@core/types/user.types";
import UnauthorizedError from "@models/errors/unauthorized-error";

import { getAuthVerifyLogin } from "@authentication/apis/auth-verify-login.api";
import { create, useStore } from "zustand";
import { devtools } from "zustand/middleware";
import { IUserSchema } from "@core/schema/user.schema";

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
      loading: false,

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

        clearAuthState: () => {
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

export type ExtractState<S> = S extends {
  getState: () => infer T;
}
  ? T
  : never;

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

const isAuthenticatedSelector = (state: ExtractState<typeof authStore>) =>
  state.isAuthenticated;
const userSelector = (state: ExtractState<typeof authStore>) => state.user;
const authLoadingSelector = (state: ExtractState<typeof authStore>) =>
  state.loading;
const authActionSelector = (state: ExtractState<typeof authStore>) =>
  state.actions;

// Getters
export const getIsAuthenticated = () =>
  isAuthenticatedSelector(authStore.getState());
export const getUser = () => userSelector(authStore.getState());
export const getAuthLoading = () => authLoadingSelector(authStore.getState());
export const getAuthActions = () => authActionSelector(authStore.getState());

function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector);
}

// Hooks
export const useIsAuthenticated = () => useAuthStore(isAuthenticatedSelector);
export const useUser = () => useAuthStore(userSelector);
export const useAuthLoading = () => useAuthStore(authLoadingSelector);
export const useAuthActions = () => useAuthStore(authActionSelector);

export { useAuthStore };
