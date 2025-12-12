import { useEffect, useRef } from "react";
import { ChatbotMessagesProps } from "@/lib/utils/types";
import ChatbotLoading from "@/components/chatbot/chatbot-loading";
import ChatbotMessage from "@/components/chatbot/chatbot-message";

export default function ChatbotMessages({
  messages,
  loading,
}: ChatbotMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col overflow-y-auto p-6 h-full bg-gray-50/50 dark:bg-gray-900/50 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
      {messages.map((message, index) => (
        <ChatbotMessage key={index} index={index} message={message} />
      ))}
      {loading && <ChatbotLoading />}
      <div ref={messagesEndRef} />
    </div>
  );
}
