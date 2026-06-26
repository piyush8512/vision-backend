import { z } from "zod";

export const signupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters"),

  email: z
    .email("Invalid email address")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100),
});

export const loginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(8),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
});


export type SignupInput = z.infer<typeof signupSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type LoginInput = z.infer<typeof loginSchema>;