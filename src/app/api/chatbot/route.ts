import OpenAI from "openai";
import { chatbot } from "@/app/utils/constants";

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
  const body = await request.json();

  if (body.message) {
    messages.push({
      role: "user",
      content: body.message,
    });
  }

  const res = await openai.chat.completions.create({
    messages: [...messages],
    model: "gpt-3.5-turbo",
    temperature: 1,
    max_tokens: 150,
  });

  messages.push({
    role: "assistant",
    content: res.choices[0].message.content,
  });

  return Response.json({ message: res.choices[0].message });
}
