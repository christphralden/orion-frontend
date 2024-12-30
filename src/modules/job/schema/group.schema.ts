import { z } from "zod";

const GroupAssistant = z.object({
  groupId: z.number(),
  initial: z.string(),
});

const GroupAssistantWithDetails = GroupAssistant.extend({
  submissionLink: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  class: z.string(),
});

const GroupThreads = z.object({
  id: z.number(),
  groupId: z.number(),
  title: z.string(),
  content: z.string(),
  authorInitial: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
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

const GroupWithDetailsSchema = GroupSchema.extend({
  groupAssistants: z.array(GroupAssistantWithDetails),
});

const GroupWithThreadsSchema = GroupWithDetailsSchema.extend({
  groupThreads: z.array(GroupThreads),
});

export {
  GroupAssistant,
  GroupAssistantWithDetails,
  GroupThreads,
  GroupSchema,
  GroupWithDetailsSchema,
  GroupWithThreadsSchema,
};
