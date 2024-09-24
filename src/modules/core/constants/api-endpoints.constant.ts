const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "auth/login",
    VERIFY: "auth/verify",
    LOGOUT: "auth/logout",
  },
} as const;

type AuthEndpoints = typeof API_ENDPOINTS.AUTH;
type ApiEndpoints = typeof API_ENDPOINTS;

export { API_ENDPOINTS };
export type { ApiEndpoints, AuthEndpoints };
