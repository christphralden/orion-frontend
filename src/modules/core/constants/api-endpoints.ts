type AuthEndpoints = {
  LOGIN: "auth/login";
  VERIFY: "auth/verify";
};

type ApiEndpoints = {
  AUTH: AuthEndpoints;
};

const API_ENDPOINTS: ApiEndpoints = {
  AUTH: {
    LOGIN: "auth/login",
    VERIFY: "auth/verify",
  },
};

export { API_ENDPOINTS };
