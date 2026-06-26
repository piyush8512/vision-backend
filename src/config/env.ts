import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),

  DATABASE_URL: z.string(),

  SUPABASE_URL: z.string().url(),

  SUPABASE_ANON_KEY: z.string(),

  SUPABASE_SERVICE_ROLE_KEY: z.string(),

  FRONTEND_URL: z.string().url(),

  GOOGLE_REDIRECT_URI: z.string().url(),
});

export const env = envSchema.parse(process.env);