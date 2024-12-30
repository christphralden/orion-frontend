import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

interface Semester {
  description: string;
  semesterId: string;
}

async function getAllSemesters() {
  return apiClient.get<IResponse<Semester[]>>({
    url: API_ENDPOINTS.SEMESTER.ALL,
    options: {
      credentials: "include",
    },
  });
}

async function getActiveSemester() {
  return apiClient.get<IResponse<Semester>>({
    url: API_ENDPOINTS.SEMESTER.ACTIVE,
    options: {
      credentials: "include",
    },
  });
}

export type { Semester };
export { getAllSemesters, getActiveSemester };
