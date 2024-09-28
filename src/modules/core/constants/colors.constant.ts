import type { JobList } from "@job/types/job.types";

const COLORS: Record<JobList, string> = {
  TPA: "#FA8072",
  Correction: "#00a8e0",
  "Case Making": "#9AB973", // TODO: pray
  RIG: "#FAFAFA",
} as const;

type ColorType = keyof typeof COLORS;
export { COLORS };
export type { ColorType };
