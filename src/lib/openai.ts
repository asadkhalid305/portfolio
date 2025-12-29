import OpenAI from "openai";

// Determine which provider to use
export const useOpenRouter = process.env.USE_OPENROUTER === "true";

// Initialize the OpenAI client (works with OpenRouter too since it's OpenAI-compatible)
const apiKey = useOpenRouter
  ? process.env.OPENROUTER_API_KEY
  : process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.warn(
    "Warning: Missing API Key for OpenAI/OpenRouter. Chatbot will not function."
  );
}

export const openai = new OpenAI({
  apiKey: apiKey || "dummy-key-to-prevent-crash",
  baseURL: useOpenRouter ? "https://openrouter.ai/api/v1" : undefined,
  defaultHeaders: useOpenRouter
    ? {
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL || "https://asadullahkhalid.com",
        "X-Title": "Asad Khalid Portfolio Chatbot",
      }
    : undefined,
});
