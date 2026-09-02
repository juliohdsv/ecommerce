import z from "zod";
import "dotenv/config";

const envSchema = z.object({
  NODE_PORT: z.coerce.number(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  DATABASE_URL: z.url(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error(_env.error);
  throw new Error("Variables not configured for application.");
}

export const env = _env.data;
