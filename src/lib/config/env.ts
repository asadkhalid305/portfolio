import { z } from "zod";

const envSchema = z.object({
  OPENAI_API_KEY: z.string().optional(),
  OPENROUTER_API_KEY: z.string().optional(),
  USE_OPENROUTER: z.string().optional(),
  NEXT_PUBLIC_ENABLE_CHATBOT: z.string().optional(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export function validateEnv() {
  try {
    const env = envSchema.parse(process.env);
    return env;
  } catch (error) {
    console.error("❌ Invalid environment variables:", error);
    throw new Error("Invalid environment configuration");
  }
}

export const env = validateEnv();
