import { z } from "zod";

const SemesterSchema = z.object({
  description: z.string(),
  semesterId: z.string(),
});

export { SemesterSchema };
