import { chatbot } from "@/app/utils/constants";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const { prompt, dataset } = chatbot;
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

export async function POST(request: Request) {
  if (request.body) {
    const text = await request.text();
    const body = JSON.parse(text);

    if (body.message) {
      messages.push({
        role: "user",
        content: body.message,
      });
    }
  }
  const response = await openai.chat.completions.create({
    messages: [...messages],
    model: "gpt-3.5-turbo",
    temperature: 1,
    max_tokens: 150,
  });

  messages.push({
    role: "assistant",
    content: response.choices[0].message.content,
  });

  return Response.json({
    response: { message: response.choices[0].message },
  });
}
