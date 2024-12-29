import type { IResponse } from "@core/types/api.types";
import apiClient from "@core/apis/api-client";
import { API_ENDPOINTS } from "@constants/api-endpoints.constant";

interface Semester {
  description: string;
  semesterId: string;
}

async function getAllSemesters() {
  const res = await apiClient.get<IResponse<Semester[]>>({
    url: API_ENDPOINTS.SEMESTER.ALL,
    options: {
      credentials: "include",
    },
  });

  return res;
}

async function getActiveSemester() {
  const res = await apiClient.get<IResponse<Semester>>({
    url: API_ENDPOINTS.SEMESTER.ACTIVE,
    options: {
      credentials: "include",
    },
  });

  return res;
}

export type { Semester };
export { getAllSemesters, getActiveSemester };
