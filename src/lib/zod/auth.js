import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(2, { message: "username must be 2 or more character" })
    .max(50, { message: "username must be 50 or less character" }),
  email: z
    .string()
    .min(3, { message: "email must be 2 or more character" })
    .max(50, { message: "email must be 50 or less character" }),
  password: z
    .string()
    .min(3, { message: "password must be more than 3 character" })
    .max(50, { message: "password must be 50 or less character" }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "email must be 2 or more character" })
    .max(50, { message: "email must be 50 or less character" }),
  password: z
    .string()
    .min(3, { message: "password must be more than 3 character" })
    .max(50, { message: "password must be 50 or less character" }),
});

// export default RegisterSchema;
