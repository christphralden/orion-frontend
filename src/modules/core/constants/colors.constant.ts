import type { JobList } from "@job/types/job.types";

export const COLORS: Record<JobList, string> = {
  TPA: "#FA8072",
  Correction: "#00a8e0",
  Casemaking: "#9AB973",
  RIG: "#FAFAFA",
} as const;

type ColorType = keyof typeof COLORS;
export type { ColorType };
