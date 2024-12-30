import { z } from "zod";

const IResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    message: z.string(),
    status: z.boolean(),
    errors: z.optional(z.any()),
    data: dataSchema,
  });

export { IResponseSchema };
