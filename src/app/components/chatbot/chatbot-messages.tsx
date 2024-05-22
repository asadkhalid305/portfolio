import { useEffect, useRef } from "react";
import { ChatbotMessagesProps } from "@/app/utils/types";
import ChatbotLoading from "./chatbot-loading";
import ChatbotMessage from "./chatbot-message";

export default function ChatbotMessages({
  messages,
  loading,
}: ChatbotMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col overflow-y-auto p-4 h-full shadow-inner">
      {messages.map((message, index) => (
        <ChatbotMessage key={index} index={index} message={message} />
      ))}
      {loading && <ChatbotLoading />}
      <div ref={messagesEndRef} />
    </div>
  );
}
