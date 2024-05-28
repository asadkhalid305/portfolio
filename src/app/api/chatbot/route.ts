import OpenAI from "openai";
import { chatbot } from "@/app/utils/constants";

// Initialize the OpenAI API with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const { config, dataset, prompt } = chatbot;

// Initialize the messages array with system prompt and default dataset
const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: prompt,
  },
  {
    role: "assistant",
    content: dataset,
  },
];

// Define the POST function
export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();

  // If the body does not contain a message, return a custom message to provide a message
  if (!body.message) {
    return Response.json({
      message: {
        role: "assistant",
        content: "Please provide a message.",
      },
    });
  }

  // Add the incoming user's message to the messages array
  messages.push({
    role: "user",
    content: body.message,
  });

  // Call the OpenAI API to generate a response
  const res = await openai.chat.completions.create({
    model: config.model,
    temperature: config.temperature,
    max_tokens: config.maxTokens,
    messages: [...messages],
  });

  // Extract the assistant's message from the response
  const reply: OpenAI.Chat.Completions.ChatCompletionMessageParam = {
    role: res.choices[0].message.role,
    content: res.choices[0].message.content,
  };

  // Add the assistant's reply to incoming message to the messages array
  messages.push(reply);

  // Return the assistant's message in the response
  return Response.json({ message: reply });
}
