import clsx from "clsx";
import { ChatbotMessageProps } from "@/app/utils/types";

export default function ChatbotMessage({
  message,
  index,
}: ChatbotMessageProps) {
  return (
    <div className="flex justify-end">
      <div
        key={index}
        className={clsx("mb-4 p-2 rounded-md bg-gray-200 shadow-md", {
          "self-end": message.role === "user",
        })}
      >
        {message.content}
      </div>
      {message.role !== "user" && <div className="flex-1"></div>}
    </div>
  );
}
