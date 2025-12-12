import OpenAI from "openai";
import { chatbot } from "@/lib/constants";

// Initialize the OpenAI API with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const { config, dataset, prompt } = chatbot;

// Define the POST function
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate input
    if (!body.message || typeof body.message !== "string") {
      return Response.json(
        {
          error: "Please provide a valid message.",
        },
        { status: 400 }
      );
    }

    const userMessage = body.message.trim();
    if (!userMessage) {
      return Response.json(
        {
          error: "Message cannot be empty.",
        },
        { status: 400 }
      );
    }

    // Build messages array for this request only (no shared state)
    // Client manages conversation history, server is stateless
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "assistant",
        content: dataset,
      },
      {
        role: "user",
        content: userMessage,
      },
    ];

    // Call the OpenAI API to generate a response
    const res = await openai.chat.completions.create({
      model: config.model,
      temperature: config.temperature,
      max_tokens: config.maxTokens,
      messages,
    });

    // Extract the assistant's message from the response
    const assistantMessage = res.choices[0]?.message;

    if (!assistantMessage?.content) {
      return Response.json(
        {
          error: "Failed to generate response.",
        },
        { status: 500 }
      );
    }

    const reply: OpenAI.Chat.Completions.ChatCompletionMessageParam = {
      role: assistantMessage.role,
      content: assistantMessage.content,
    };

    // Return the assistant's message in the response
    return Response.json({ message: reply });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return Response.json(
      {
        error: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
