type AuthEndpoints = {
  LOGIN: "auth/login";
};

type ApiEndpoints = {
  AUTH: AuthEndpoints;
};

const API_KEYS: ApiEndpoints = {
  AUTH: {
    LOGIN: "auth/login",
  },
};

export { API_KEYS };
