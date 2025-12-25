import clsx from "clsx";
import { ChatbotMessageProps } from "@/utils/types";

export default function ChatbotMessage({
  message,
  index,
}: ChatbotMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={clsx(
        "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-500",
        {
          "justify-end": isUser,
          "justify-start": !isUser,
        }
      )}
    >
      <div
        key={index}
        className={clsx(
          "max-w-[85%] px-4 py-3 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg",
          {
            "bg-c-dark text-c-light rounded-br-md": isUser,
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-md":
              !isUser,
          }
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
      </div>
    </div>
  );
}
