import { z } from "zod";

const GroupAssistant = z.object({
  groupId: z.number(),
  initial: z.string(),
});

const GroupSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  subcoInitial: z.string(),
  courseId: z.string(),
  courseName: z.string(),
  assignmentType: z.string(),
  assignmnentJob: z.string(),
  groupAssistants: z.array(GroupAssistant),
});

export { GroupSchema, GroupAssistant };
