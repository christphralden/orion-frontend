import type { IUser } from "@core/types/user.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints";

type AuthStore = {
  isAuthenticated: boolean;
  user?: IUser;
  setUser: (user: IUser) => void;
  init: () => void;
  clearAuthState: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: undefined,

      setUser: (user: IUser) => {
        set({
          user,
          isAuthenticated: !!user,
        });
      },

      init: async () => {
        try {
          const response = await apiClient.get<any>({
            url: API_ENDPOINTS.AUTH.VERIFY,
            options: {
              credentials: "include",
            },
          });

          if (response.ok) {
            const user = await response.json();
            set({
              user,
              isAuthenticated: true,
            });
          } else {
            set({
              user: undefined,
              isAuthenticated: false,
            });
          }
        } catch (error) {
          set({
            user: undefined,
            isAuthenticated: false,
          });
        }
      },

      clearAuthState: () => {
        set({
          isAuthenticated: false,
          user: undefined,
        });
      },
    }),
    {
      name: "authStore",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

export { useAuthStore };
