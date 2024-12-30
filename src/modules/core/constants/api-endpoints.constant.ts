const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "auth/login",
    VERIFY: "auth/verify",
    LOGOUT: "auth/logout",
  },
  JOB: {
    ASSISTANT: {
      ACTIVE: "job/assistant/active",
      GROUP: "group",
      GET_GROUP_BY_JOB: "group/get-group-from-job",
      PUT_SUBMISSION_LINK: "group/submit-link"
    },
    SUBCO: {
      ASSIGN_OR_SYNC_GROUPS: "group/assign",
      CORRECTION: {
        GROUP: "group/corrections",
      },
      CASEMAKING: {
        GROUP: "group/case-makings",
      }
    },
  },
  SEMESTER: {
    ALL: "semester/all",
    ACTIVE: "semester/active",
  },
  GROUP: {
    THREAD: {
      CREATE: "group/thread/create",
    },
  },
} as const;

type AuthEndpoints = typeof API_ENDPOINTS.AUTH;
type JobEnpoints = typeof API_ENDPOINTS.JOB;
type SemesterEndpoints = typeof API_ENDPOINTS.SEMESTER;
type ApiEndpoints = typeof API_ENDPOINTS;
type GroupEndpoints = typeof API_ENDPOINTS.GROUP;

export { API_ENDPOINTS };
export type {
  ApiEndpoints,
  AuthEndpoints,
  JobEnpoints,
  GroupEndpoints,
  SemesterEndpoints,
};
