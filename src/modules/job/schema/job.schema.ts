import { z } from "zod";

const QueueTransactionSchema = z.object({
  submitDate: z.string(),
  returnDate: z.string(),
  isRevision: z.boolean(),
});

const IJobSchema = z.object({
  courseCode: z.string(),
  courseName: z.string(),
  user: z.string(),
  subco: z.string(),
  class: z.string(),
  job: z.string(),
  type: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  revisionCount: z.number(),
  weight: z.number(),
  number: z.union([z.number(), z.string()]),
  status: z.string(),
  queueTransactions: z.array(QueueTransactionSchema),
});

export { QueueTransactionSchema, IJobSchema };
