type AuthEndpoints = {
  LOGIN: "auth/login";
  VERIFY: "auth/verify";
  LOGOUT: "auth/logout";
};

type ApiEndpoints = {
  AUTH: AuthEndpoints;
};

const API_ENDPOINTS: ApiEndpoints = {
  AUTH: {
    LOGIN: "auth/login",
    VERIFY: "auth/verify",
    LOGOUT: "auth/logout",
  },
};

export { API_ENDPOINTS };
