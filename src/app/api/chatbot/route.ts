import OpenAI from "openai";
import { chatbot } from "@/lib/constants";
import { openai, useOpenRouter } from "@/lib/config/openai";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const { config, dataset, prompt } = chatbot;

// Define the POST function
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate input - accept messages array for conversation history
    if (!body.messages || !Array.isArray(body.messages)) {
      return Response.json(
        {
          error: "Please provide a valid messages array.",
        },
        { status: 400 }
      );
    }

    if (body.messages.length === 0) {
      return Response.json(
        {
          error: "Messages array cannot be empty.",
        },
        { status: 400 }
      );
    }

    const messages = body.messages as Message[];

    // Build messages array with system prompt + dataset at the beginning for optimal caching
    // Client sends full conversation history, server is stateless
    const apiMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "assistant",
        content: dataset,
      },
      ...messages, // Add user conversation history
    ];

    // Call the OpenAI/OpenRouter API to generate a response with cost optimizations
    const res = await openai.chat.completions.create({
      model: config.model,
      temperature: config.temperature,
      max_completion_tokens: config.maxTokens, // Updated from deprecated max_tokens
      messages: apiMessages,
      // Enable prompt caching for cost reduction (40-80% savings) - OpenAI only
      // The system prompt + dataset will be cached for repeated requests
      ...(useOpenRouter ? {} : { store: true }),
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

    // Handle OpenAI/OpenRouter API errors
    if (error instanceof OpenAI.APIError) {
      // Rate limit errors
      if (error.status === 429) {
        return Response.json(
          {
            error:
              "I'm currently out of credits for today. Please check back tomorrow or feel free to contact me directly!",
          },
          { status: 429 }
        );
      }

      // Model not found or endpoint errors
      if (error.status === 404) {
        return Response.json(
          {
            error:
              "The AI service is temporarily unavailable. Please try again later or contact me directly!",
          },
          { status: 404 }
        );
      }

      // Authentication errors
      if (error.status === 401 || error.status === 403) {
        return Response.json(
          {
            error:
              "There's a configuration issue with the AI service. Please contact me directly for assistance!",
          },
          { status: error.status }
        );
      }

      // Other API errors
      return Response.json(
        {
          error:
            "I'm having trouble processing your request right now. Please try again or contact me directly!",
        },
        { status: error.status || 500 }
      );
    }

    // Generic errors
    return Response.json(
      {
        error:
          "Something went wrong on my end. Please try again or feel free to contact me directly!",
      },
      { status: 500 }
    );
  }
}
