import { z } from "zod";

const IUserSchema = z.object({
  userId: z.string(),
  binusianId: z.string(),
  username: z.string(),
  name: z.string(),
  roles: z.array(z.string()),
  binusianNumber: z.string(),
});

export { IUserSchema };
