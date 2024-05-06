// ChatMessage.tsx
import clsx from "clsx";
import { ChatbotMessagesProps } from "../utils/types";

export default function ChatbotMessages({ messages }: ChatbotMessagesProps) {
  return (
    <div className="overflow-y-auto p-4 h-full flex flex-col">
      {messages.map((message, index) => (
        <div
          key={index}
          className={clsx(
            "mb-4 p-2 rounded bg-gray-200 text-gray-800 flex flex-col",
            {
              "self-end": message.role === "user",
              "max-w-[5/6]": message.role === "user",
            }
          )}
        >
          <p className="justify-self-end">{message.content}</p>
        </div>
      ))}
    </div>
  );
}
