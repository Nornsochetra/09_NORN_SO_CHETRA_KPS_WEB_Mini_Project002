import { z } from "zod";

export const createNewWorkSpace = z.object({
  workspaceName: z
    .string()
    .min(2, { message: "username must be 2 or more character" })
    .max(50, { message: "username must be 50 or less character" }),
});
