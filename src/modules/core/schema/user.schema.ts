import { z } from "zod";

const IUserSchema = z.object({
  name: z.string(),
  binusianId: z.string(),
  username: z.string(),
  pictureId: z.string(),
  role: z.string(),
});

export { IUserSchema };
