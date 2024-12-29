const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "auth/login",
    VERIFY: "auth/verify",
    LOGOUT: "auth/logout",
  },
  JOB: {
    ASSISTANT: {
      ACTIVE: "job/assistant/active",
    },
    SUBCO: {
      ASSIGN_OR_SYNC_GROUPS: "group/assign/",
      CORRECTION: {
        GROUP: "group/corrections",
      },
    },
  },
  SEMESTER: {
    ALL: "semester/all",
    ACTIVE: "semester/active",
  },
} as const;

type AuthEndpoints = typeof API_ENDPOINTS.AUTH;
type JobEnpoints = typeof API_ENDPOINTS.JOB;
type SemesterEndpoints = typeof API_ENDPOINTS.SEMESTER;
type ApiEndpoints = typeof API_ENDPOINTS;

export { API_ENDPOINTS };
export type { ApiEndpoints, AuthEndpoints, JobEnpoints, SemesterEndpoints };
